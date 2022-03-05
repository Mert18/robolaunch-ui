import React from 'react'
import { GeneralMenuWrapper } from './GeneralMenu.styles'

type GeneralMenuProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GeneralMenu = ({ isOpen, setIsOpen }: GeneralMenuProps) => {
  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  return (
    <GeneralMenuWrapper isOpen={isOpen}>
      <button onClick={handleCloseMenu}>Click me to close</button>
    </GeneralMenuWrapper>
  )
}

export default GeneralMenu
