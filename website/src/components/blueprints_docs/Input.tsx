import Badge from '../Badge'

const selectors = {
  action: {
    type: 'Action',
  },
  addon: {
    type: 'Add-on',
  },
  area: {
    type: 'Area',
  },
  boolean: {
    type: 'Boolean',
  },
  device: {
    type: 'Device',
  },
  entity: {
    type: 'Entity',
  },
  virtual: {
    type: 'Virtual',
  },
  number: {
    type: 'Number',
  },
  object: {
    type: 'Object',
  },
  select: {
    type: 'Select',
  },
  target: {
    type: 'Target',
  },
  text: {
    type: 'Text',
  },
  time: {
    type: 'Time',
  },
  none: {
    type: 'Text',
  },
}

const styles = {
  inputName: {
    fontWeight: 600,
  },
  inputDescription: {
    fontSize: '0.9rem',
  },
}

interface InputProps {
  selector: string;
  required: boolean;
  name: string;
  description: string;
  deprecated: boolean;
  virtual: boolean;
}

function Input({ selector, required, name, description, deprecated, virtual }: InputProps) {
  const selectorVal = selector ? selectors[selector] : selectors.none
  return (
    <div>
      <span style={styles.inputName}>
        {name} <Badge variant='primary'>{selectorVal.type}</Badge>{' '}
        {required ? (
          <Badge variant='warning'>{required} Required</Badge>
        ) : (
          <Badge variant='info'>Optional</Badge>
        )}{' '}
        {virtual && <Badge variant='secondary'>Virtual</Badge>}
        {deprecated && <Badge variant='danger'>Deprecated</Badge>}
      </span>
      <br />
      <p style={styles.inputDescription} className='margin-top--sm'>
        {description}
      </p>
      <hr />
    </div>
  )
}

export default Input
