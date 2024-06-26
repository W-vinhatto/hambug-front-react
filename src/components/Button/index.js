import React from 'react'
import PropTypes from 'prop-types'

import { BaseButton } from './style'

export function Button ({ children, ...rest }) {
  return <BaseButton {...rest} >{children}</BaseButton>
}

Button.propTypes = {
  children: PropTypes.string
}
