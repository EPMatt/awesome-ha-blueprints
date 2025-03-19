import CustomRequirement from '../CustomRequirement'

interface ZHARequirementProps {
  required: boolean
  refers: string
  children: React.ReactNode
}

function ZHARequirement({ required, refers, children }: ZHARequirementProps) {
  return (
    <CustomRequirement name='ZHA Integration' required={required}>
      <p>
        If you plan to integrate the {refers} with ZHA, you must have this
        integration set up. The ZHA integration can be configured from the Home
        Assistant UI. Check the documentation for full details on the required
        hardware and how to set up ZHA on your system.
      </p>
      <p>{children}</p>
      <a href='https://www.home-assistant.io/integrations/zha/'>
        ZHA Integration Docs
      </a>
    </CustomRequirement>
  )
}

export default ZHARequirement
