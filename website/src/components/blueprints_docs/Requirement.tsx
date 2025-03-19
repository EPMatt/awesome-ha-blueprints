import Zigbee2MQTTRequirement from './requirements/controllers/Zigbee2MQTTRequirement'
import ZHARequirement from './requirements/controllers/ZHARequirement'
import DeCONZRequirement from './requirements/controllers/DeCONZRequirement'
import CustomRequirement from './requirements/CustomRequirement'
import ControllerRequirement from './requirements/hooks/ControllerRequirement'

const requirements = {
  zigbee2mqtt: Zigbee2MQTTRequirement,
  zha: ZHARequirement,
  deconz: DeCONZRequirement,
  controller: ControllerRequirement,
}

interface RequirementProps {
  id: string
  required: boolean
  name: string
  refers: string
  children: React.ReactNode
}

const Requirement: React.FC<RequirementProps> = ({
  id,
  required,
  name,
  refers,
  children,
}: RequirementProps) => {
  const Component = id ? requirements[id] : CustomRequirement
  return (
    <Component name={name} required={required} refers={refers}>
      {children}
    </Component>
  )
}

export default Requirement
