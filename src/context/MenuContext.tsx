import { createContext } from 'react'

interface IMenuContext {
  value: string
  toggleValue: () => void
}

const defaultState = {
  value: localStorage.getItem('isopen') || 'close',
  toggleValue: () => localStorage.setItem('isopen', 'close'),
}
const MenuContext = createContext<IMenuContext>(defaultState)

export default MenuContext
