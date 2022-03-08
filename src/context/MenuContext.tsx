import { createContext } from 'react'

interface IMenuContext {
  value: string
  toggleValue: () => void
}

const defaultState = {
  value: localStorage.getItem('isopen') || 'open',
  toggleValue: () => localStorage.setItem('isopen', 'open'),
}
const MenuContext = createContext<IMenuContext>(defaultState)

export default MenuContext
