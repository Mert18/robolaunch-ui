import { GeneralMenuWrapper, MenuList } from './GeneralMenu.styles'
import { Link } from 'react-router-dom'

const GeneralMenu = () => {
  return (
    <GeneralMenuWrapper>
      <MenuList>
        <Link to="/">Home</Link>
        <Link to="/instances">Instances</Link>
      </MenuList>
    </GeneralMenuWrapper>
  )
}

export default GeneralMenu
