import styled from 'styled-components'

type GeneralMenuProps = {
  isOpen: boolean
}

export const GeneralMenuWrapper = styled.div<GeneralMenuProps>`
  display: flex;
  flex-direction: column;
  border: 3px solid purple;
  width: 300px;
  height: 100%;
  position: fixed;
  background: var(--white);
  left: ${(props) => (props.isOpen ? `0` : `-500px`)};
  transition: left 0.2s linear;
`
