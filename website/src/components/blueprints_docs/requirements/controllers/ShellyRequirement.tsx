import CustomRequirement from '../CustomRequirement'

interface ShellyRequirementProps {
  required: boolean
  refers: string
  children: React.ReactNode
}

function ShellyRequirement({
  required,
  refers,
  children,
}: ShellyRequirementProps) {
  return (
    <CustomRequirement name='Shelly Integration' required={required}>
      <p>
        If you plan to integrate the {refers} with Shelly, you must have this
        integration set up. The Shelly integration can be configured from the
        Home Assistant UI. Check the documentation for full details on the
        required hardware and how to set up Shelly on your system.
      </p>
      <p>{children}</p>
      <a href='https://www.home-assistant.io/integrations/shelly/'>
        Shelly Integration Docs
      </a>
    </CustomRequirement>
  )
}

export default ShellyRequirement
