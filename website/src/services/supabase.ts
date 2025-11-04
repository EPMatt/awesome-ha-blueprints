import { createClient, SupabaseClient } from '@supabase/supabase-js'
// @ts-expect-error: Generated at build time by Docusaurus
import siteConfig from '@generated/docusaurus.config'

// Initialize Supabase client
let supabase: SupabaseClient | null = null

const ensureClient = (): SupabaseClient | null => {
  if (supabase) return supabase
  // Prefer values from customFields.env
  const customFields: any = (siteConfig as any)?.customFields || {}
  const envFromConfig = customFields.env || {}
  const supabaseUrl = envFromConfig.SUPABASE_URL
  const supabaseKey = envFromConfig.SUPABASE_ANON_KEY
  if (supabaseUrl && supabaseKey) {
    initializeSupabase({ supabaseUrl, supabaseKey })
  }
  return supabase
}

/**
 * Initialize the Supabase client (called once when app starts)
 */
export const initializeSupabase = ({
  supabaseUrl,
  supabaseKey,
}: {
  supabaseUrl: string
  supabaseKey: string
}): void => {
  supabase = createClient(supabaseUrl, supabaseKey)
  console.log('Supabase initialized')
}

/**
 * Record a blueprint download in the Supabase database
 *
 * @param category The blueprint category
 * @param id The blueprint ID
 * @param version The blueprint version
 * @returns Promise that resolves to the insertion result or null
 */
export const recordBlueprintDownload = async (
  category: string,
  id: string,
  version: string = 'latest',
): Promise<boolean> => {
  if (!ensureClient()) {
    console.error('Supabase client not initialized')
    return false
  }

  try {
    const { error } = await (supabase as SupabaseClient)
      .from('blueprint_downloads')
      .insert([
        {
          blueprint_category: category,
          blueprint_id: id,
          blueprint_version: version,
          download_date: new Date().toISOString(),
        },
      ])

    if (error) {
      console.error('Error recording blueprint download:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Exception recording blueprint download:', error)
    return false
  }
}

/**
 * Get the total downloads for a blueprint
 *
 * @param category The blueprint category
 * @param id The blueprint ID
 * @returns Promise that resolves to the total downloads count or 0
 */
export const getBlueprintDownloads = async (
  category: string,
  id: string,
): Promise<number> => {
  if (!ensureClient()) {
    console.error('Supabase client not initialized')
    return 0
  }

  try {
    const { data, error } = await (supabase as SupabaseClient).rpc(
      'get_blueprint_downloads',
      { p_category: category, p_id: id },
    )
    if (error) {
      console.error('Error getting blueprint downloads via RPC:', error)
      return 0
    }
    return typeof data === 'number' ? data : 0
  } catch (error) {
    console.error('Exception getting blueprint downloads:', error)
    return 0
  }
}
