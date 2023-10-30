import { useContext } from 'react'
import { OcxContext } from '@/contexts/OcxContext'

export const useOcx = () => {
  return useContext(OcxContext)
}
