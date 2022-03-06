import React from 'react'
import { GeneralMenuWrapper, MenuList } from './GeneralMenu.styles'
import { Link } from 'react-router-dom'

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
      <MenuList>
        <Link to="/">Home</Link>
        <Link to="/instances">Instances</Link>
      </MenuList>
    </GeneralMenuWrapper>
  )
}

export default GeneralMenu
