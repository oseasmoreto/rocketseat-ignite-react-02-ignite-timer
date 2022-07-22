import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'pink',
  secondary: 'purple',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme['green-500']}

 /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}*/
`