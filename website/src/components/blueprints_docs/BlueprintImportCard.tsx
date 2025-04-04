import Link from '@docusaurus/Link'

const styles = {
  myHomeAssistantImage: {
    width: '100%',
    maxWidth: 212,
  },
}

interface BlueprintImportCardProps {
  category: string
  id: string
}

function BlueprintImportCard({ category, id }: BlueprintImportCardProps) {
  // New custom URL format that will redirect to the GitHub URL
  const blueprintUrl = `/awesome-ha-blueprints/blueprints/${category}/${id}?version=latest`

  return (
    <div className='card item shadow--md'>
      <div className='card__header margin-bottom--md'>
        <h3>Import this blueprint</h3>
      </div>
      <div className='card__body'>
        <div className='row row--no-gutters'>
          <div className='col col--12'>
            <h5>My Home Assistant</h5>
            <p>
              <Link to={blueprintUrl}>
                <img
                  src='https://my.home-assistant.io/badges/blueprint_import.svg'
                  alt='Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.'
                  style={styles.myHomeAssistantImage}
                />
              </Link>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueprintImportCard
