import Link from '@docusaurus/Link'
import { useEffect, useState } from 'react'
import { getBlueprintDownloads } from '../../services/supabase'
import { changelogsContext, blueprintsContext } from '../../utils'
import yaml from 'yaml'
import Select from 'react-select'
import type { StylesConfig } from 'react-select'

type VersionOption = { value: string; label: string }

interface ChangelogEntry {
  date: string
  changes: Array<{ description: string; breaking: boolean }>
}

const styles = {
  header: {
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: 'var(--ifm-color-emphasis-900)',
    margin: 0,
    lineHeight: 1.2,
  },
  downloadCountBox: {
    height: '100%',
  },
  downloadCountLabel: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--ifm-color-emphasis-700)',
  },
  downloadCountValue: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--ifm-color-emphasis-900)',
  },
  versionAndButtonContainer: {},
  versionSelector: {
    flex: 1,
  },
  versionLabel: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--ifm-color-emphasis-900)',
    marginBottom: '0.625rem',
  },
  spaceY: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  maintainersContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
    height: '100%',
  },
  maintainersLabel: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--ifm-color-emphasis-700)',
  },
  maintainersList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.75rem',
    alignItems: 'center',
  },
  maintainerItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  maintainerAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
  },
  maintainerLink: {
    fontSize: '0.875rem',
    color: 'var(--ifm-color-primary)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'opacity 0.2s ease',
  },
}

interface BlueprintImportCardProps {
  category: string
  id: string
}

/**
 * Formats download count with K/M suffixes
 */
function formatDownloads(num: number | null): string {
  if (num === null) return '–'
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toString()
}

/**
 * Generates a GitHub avatar URL for a GitHub username
 * @param username - GitHub username
 * @returns GitHub avatar URL
 */
function getGitHubAvatarUrl(username: string): string {
  // GitHub provides avatars via redirect from profile URL
  // Format: https://github.com/{username}.png
  // This redirects to the actual avatar image hosted on GitHub's CDN
  // Size is controlled via CSS (styles.maintainerAvatar)
  return `https://github.com/${username}.png`
}

/**
 * Loads and extracts maintainers from blueprint YAML
 * @param category - Blueprint category (e.g., 'automation', 'controllers')
 * @param id - Blueprint ID
 * @returns Array of maintainer usernames or empty array if not found
 */
function loadBlueprintMaintainers(category: string, id: string): string[] {
  try {
    const path = `./${category}/${id}/${id}.yaml`
    const content = blueprintsContext(path)
    const parsed = yaml.parse(content) as {
      variables?: { ahb_maintainers?: string[] }
    }

    if (
      parsed?.variables?.ahb_maintainers &&
      Array.isArray(parsed.variables.ahb_maintainers)
    ) {
      return parsed.variables.ahb_maintainers
    }

    return []
  } catch {
    // If the file is not found or any error occurs, return empty array
    return []
  }
}

/**
 * Loads and extracts versions from changelog.json
 * @param category - Blueprint category (e.g., 'automation', 'controllers')
 * @param id - Blueprint ID
 * @returns Object containing sorted versions array and latest version, or null if no versions found
 */
function loadBlueprintVersions(
  category: string,
  id: string,
): { versions: string[]; latestVersion: string } | null {
  try {
    const path = `./${category}/${id}/changelog.json`
    const parsed = changelogsContext(path) as unknown as ChangelogEntry[]

    if (!parsed || parsed.length === 0) {
      return null
    }

    // Extract all dates and sort them (newest first)
    const dates = parsed.map((entry) => entry.date)
    // Sort dates in descending order (newest first)
    // Dates are in "YYYY.MM.DD" format, so we can sort them as strings
    const sortedDates = [...dates].sort((a, b) => b.localeCompare(a))

    return {
      versions: sortedDates,
      latestVersion: sortedDates[0] || 'latest',
    }
  } catch {
    // If the file is not found or any error occurs, return null
    // The error message check is not needed here since we'll handle it gracefully
    return null
  }
}

function BlueprintImportCard({ category, id }: BlueprintImportCardProps) {
  const [downloadCount, setDownloadCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [versions, setVersions] = useState<string[]>([])
  const [selectedVersion, setSelectedVersion] = useState<string>('latest')
  const [isLoadingVersions, setIsLoadingVersions] = useState<boolean>(true)
  const [maintainers, setMaintainers] = useState<string[]>([])
  const [isLoadingMaintainers, setIsLoadingMaintainers] =
    useState<boolean>(true)

  // Load changelog to extract versions
  useEffect(() => {
    let isMounted = true

    const result = loadBlueprintVersions(category, id)

    if (!isMounted) return

    if (result) {
      setVersions(result.versions)
      // disabled for now. only show latest version
      // setSelectedVersion(result.latestVersion)
      setSelectedVersion('latest')
    } else {
      setVersions([])
      setSelectedVersion('latest')
    }

    setIsLoadingVersions(false)

    return () => {
      isMounted = false
    }
  }, [category, id])

  // Load maintainers from blueprint YAML
  useEffect(() => {
    let isMounted = true

    const maintainersList = loadBlueprintMaintainers(category, id)

    if (!isMounted) return

    setMaintainers(maintainersList)
    setIsLoadingMaintainers(false)

    return () => {
      isMounted = false
    }
  }, [category, id])

  useEffect(() => {
    let isCancelled = false
    setIsLoading(true)
    getBlueprintDownloads(category, id)
      .then((count) => {
        if (!isCancelled) setDownloadCount(count)
      })
      .catch(() => {
        if (!isCancelled) setDownloadCount(null)
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false)
      })
    return () => {
      isCancelled = true
    }
  }, [category, id])

  // New custom URL format that will redirect to the GitHub URL
  const blueprintUrl = `/awesome-ha-blueprints/blueprints/${category}/${id}?version=${selectedVersion}`

  // Get the latest version (first in sorted array, which is newest)
  // const latestVersion = versions.length > 0 ? versions[0] : null

  // Prepare options for react-select
  // disabled for now. only show latest version
  // const versionOptions: VersionOption[] =
  //   versions.length > 0
  //     ? versions.map((version) => ({
  //         value: version,
  //         label: version === latestVersion ? `${version} (latest)` : version,
  //       }))
  //     : [{ value: 'latest', label: 'latest' }]
  const versionOptions: VersionOption[] = [{ value: 'latest', label: 'latest' }]

  // Custom styles for react-select
  const selectStyles: StylesConfig<VersionOption, false> = {
    control: (provided, state) => ({
      ...provided,
      padding: '0.5rem 0.75rem',
      fontSize: '0.9375rem',
      border: `1px solid ${
        state.isFocused
          ? 'var(--ifm-color-primary)'
          : 'var(--ifm-color-emphasis-300)'
      }`,
      borderRadius: 'var(--ifm-global-radius)',
      backgroundColor: 'var(--ifm-background-color)',
      color: 'var(--ifm-color-emphasis-900)',
      cursor: 'pointer',
      transition: 'border-color 0.2s ease',
      boxShadow: state.isFocused
        ? '0 0 0 1px var(--ifm-color-primary)'
        : 'none',
    }),
    valueContainer: (provided) => ({
      ...provided,
      backgroundColor: 'var(--ifm-background-color)',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      backgroundColor: 'var(--ifm-background-color)',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused
        ? 'var(--ifm-color-emphasis-900)'
        : 'var(--ifm-color-emphasis-600)',
      ':hover': {
        color: 'var(--ifm-color-emphasis-900)',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? 'var(--ifm-color-primary)'
        : state.isFocused
          ? 'var(--ifm-color-emphasis-100)'
          : 'var(--ifm-background-surface-color)',
      color: state.isSelected
        ? 'var(--ifm-color-primary-contrast-background)'
        : 'var(--ifm-color-emphasis-900)',
      cursor: 'pointer',
      padding: '0.625rem 0.875rem',
      fontSize: '0.9375rem',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--ifm-color-emphasis-900)',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'var(--ifm-background-color)',
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: 'var(--ifm-global-radius)',
      boxShadow: 'var(--ifm-global-shadow-md)',
      zIndex: 9999,
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: 'var(--ifm-background-color)',
      padding: 0,
    }),
    input: (provided) => ({
      ...provided,
      color: 'var(--ifm-color-emphasis-900)',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--ifm-color-emphasis-600)',
    }),
  }

  return (
    <>
      <style>{`
        .version-and-button-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        @media (min-width: 996px) {
          .version-and-button-container {
            flex-direction: row;
            align-items: flex-end;
            gap: 1rem;
          }
          .version-selector-wrapper {
            flex: 1;
          }
          .download-button-wrapper {
            flex: 1;
          }
        }
      `}</style>
      <div className='container'>
        <div className='row'>
          {/* Maintainers */}
          {isLoadingMaintainers ? (
            <div
              className='col col--6 margin-bottom--md'
              style={styles.maintainersContainer}
            >
              <span style={styles.maintainersLabel}>Maintainers</span>
              <p style={{ margin: 0, color: 'var(--ifm-color-emphasis-600)' }}>
                Loading maintainers…
              </p>
            </div>
          ) : maintainers.length > 0 ? (
            <div
              className='col col--6 margin-bottom--md'
              style={styles.maintainersContainer}
            >
              <span style={styles.maintainersLabel}>Maintainers</span>
              <div style={styles.maintainersList}>
                {maintainers.map((username) => (
                  <div key={username} style={styles.maintainerItem}>
                    <img
                      src={getGitHubAvatarUrl(username)}
                      alt={`${username} avatar`}
                      style={styles.maintainerAvatar}
                    />
                    <a
                      href={`https://github.com/${username}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={styles.maintainerLink}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.8'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1'
                      }}
                    >
                      {username}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className='col col--6 margin-bottom--md'></div>
          )}
          {/* Total Downloads */}
          <div
            className='col col--6 margin-bottom--md'
            style={styles.downloadCountBox}
          >
            <span style={styles.downloadCountLabel}>Total Downloads</span>
            <div
              className='blueprint-download-value'
              style={styles.downloadCountValue}
            >
              {isLoading ? '…' : formatDownloads(downloadCount)}
            </div>
          </div>
        </div>

        {/* Version Selector and Import Button */}
        {isLoadingVersions ? (
          <div className='row'>
            <div
              className='col col--6 margin-bottom--md'
              style={styles.versionSelector}
            >
              <label htmlFor='version-select' style={styles.maintainersLabel}>
                Download
              </label>
              <p style={{ margin: 0, color: 'var(--ifm-color-emphasis-600)' }}>
                Loading versions…
              </p>
            </div>
          </div>
        ) : (
          <div
            className='row version-and-button-container'
            style={styles.versionAndButtonContainer}
          >
            <div
              className='col col--6 margin-bottom--md'
              style={styles.versionSelector}
            >
              <label htmlFor='version-select' style={styles.maintainersLabel}>
                Download
              </label>
              <Select
                inputId='version-select'
                value={versionOptions.find(
                  (option) => option.value === selectedVersion,
                )}
                onChange={(option) => {
                  if (option) {
                    setSelectedVersion(option.value)
                  }
                }}
                options={versionOptions}
                styles={selectStyles}
                isSearchable={false}
                menuPortalTarget={
                  typeof document !== 'undefined' ? document.body : undefined
                }
                menuPosition='fixed'
              />
            </div>
            {/* Import Button */}
            <div className='col col--6 download-button-wrapper margin-bottom--md'>
              <Link to={blueprintUrl}>
                <img
                  src='https://my.home-assistant.io/badges/blueprint_import.svg'
                  alt='Import to Home Assistant'
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BlueprintImportCard
