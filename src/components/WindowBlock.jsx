import useOcxMethods from '@/hooks/useOcxMethods'
import { OutlineButton } from '@/components/preline/Button'

const WindowBlock = ({ ocx }) => {
  const { setUserInput } = useOcxMethods(ocx)

  return (
    <>
      <OutlineButton onClick={() => setUserInput(0)}>Block</OutlineButton>
      <OutlineButton onClick={() => setUserInput(1)}>Unblock</OutlineButton>
    </>
  )
}

export default WindowBlock
