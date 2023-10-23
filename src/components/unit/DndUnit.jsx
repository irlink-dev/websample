import { DndState } from '@/enums/OcxState'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import { useContext } from 'react'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import { PhoneDisabled, PhoneEnabled } from '@mui/icons-material'
import useOcxMethods from '@/hooks/useOcxMethods'

const DndUnit = ({ ocx }) => {
  const { dndState } = useContext(OcxStateContext)
  const { setDnd } = useOcxMethods(ocx)

  return (
    <>
      {dndState === DndState.DND_ON ? (
        <button
          className={ButtonStyles.PRELINE_SOLID}
          onClick={() => setDnd(0)}
        >
          <PhoneDisabled sx={{ width: '20px', height: '20px' }} /> DND ON
        </button>
      ) : (
        <button className={ButtonStyles.PRELINE_SOFT} onClick={() => setDnd(1)}>
          <PhoneEnabled sx={{ width: '20px', height: '20px' }} /> DND OFF
        </button>
      )}
    </>
  )
}

export default DndUnit
