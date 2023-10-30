import useOcxMethods from '@/hooks/useOcxMethods'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import { useOcx } from '@/hooks/useOcx'

const VolumeUnit = () => {
  const { ocx } = useOcx()
  const { getVolume, getMaxVolume } = useOcxMethods(ocx)

  return (
    <>
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getVolume()}
      >
        GET_VOLUME
      </button>

      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getMaxVolume()}
      >
        GET_MAX_VOLUME
      </button>

      {/* Set Volume */}
      {/*<Button*/}
      {/*    variant="alternative"*/}
      {/*    onClick={() => setVolume(1)}*/}
      {/*>*/}
      {/*    <VolumeUp />*/}
      {/*    /!*<VolumeDown />*!/*/}
      {/*</Button>*/}
    </>
  )
}

export default VolumeUnit
