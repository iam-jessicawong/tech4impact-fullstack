import styled from "styled-components";

const customStyle = (props) => {
  const customOutline = props.outline ? 'lightblue' : 'white'
  const customBgColor = props.outline ? 'white' : 'lightblue'
  const customColor = props.outline ? 'lightblue' : 'white'
  const customWidth = props.fullWidth ? '100%' : 'auto'
  const customBorderHover = props.outline ? 'lightblue' : 'cornflowerblue'
  const customBgColorHover = props.outline ? 'lightblue' : 'cornflowerblue'


  return {
    borderColor: customOutline,
    bgColor: customBgColor,
    color: customColor,
    width: customWidth,
    borderColorHover: customBorderHover,
    bgColorHover: customBgColorHover
  }
}

const StyledButton = styled.button.attrs(customStyle)`
  cursor: pointer;
  padding: 0.5em 1.5em;
  font-family: sans-serif;
  font-size: 1.25em;
  border: 1px solid ${(props) => (props.borderColor)};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  border-radius: 0.3em;

  &:hover {
    border: 1px solid ${(props) => props.borderColorHover};
    background-color: ${(props) => props.bgColorHover};
    color: white;
  }
`

export {
  StyledButton
}