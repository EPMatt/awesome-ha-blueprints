import React from 'react'
import {
  Card,
  FormControl,
  InputGroup,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { ClipboardPlus } from 'react-bootstrap-icons'

const styles = {
  myHomeAssistantImage: {
    width: '100%',
    maxWidth: 212,
  },
}

function BlueprintImportCard(props) {
  const url = `https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/${props.category}/${props.id}/${props.id}.yaml`
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url)
  }
  return (
    <Card className={props.className} border='primary' style={props.style}>
      <Card.Header as='h6'>Import this blueprint</Card.Header>
      <Card.Body>
        <Card.Text>My Home Assistant:</Card.Text>
        <a
          href={`https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${escape(
            url
          )}`}
          target='_blank'
        >
          <img
            src='https://my.home-assistant.io/badges/blueprint_import.svg'
            alt='Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.'
            style={styles.myHomeAssistantImage}
          />
        </a>
        <br />
        <small>(Home Assistant 2021.3.0 or higher)</small>
        <hr />
        <Card.Text>Direct Link:</Card.Text>
        <InputGroup className='mb-3'>
          <FormControl type='text' readOnly value={url} />
          <InputGroup.Append>
            <OverlayTrigger
              trigger='click'
              placement='top'
              overlay={(props) => (
                <Tooltip id='overlay-link' {...props}>
                  Link Copied!
                </Tooltip>
              )}
            >
              <Button variant='outline-dark' onClick={copyToClipboard}>
                <ClipboardPlus size={16} />
              </Button>
            </OverlayTrigger>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  )
}

export default BlueprintImportCard
