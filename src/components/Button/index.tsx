import { useState } from 'react'

import {ButtonContainer, ButtonVariant} from './index.styles';

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({variant = 'primary'} : ButtonProps) {
  return (
    <ButtonContainer variant={variant}> Enviar </ButtonContainer>
  )
}