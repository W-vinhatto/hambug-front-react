import React from 'react'
import PropTypes from 'prop-types'

import { BaseButton } from './style'

function Button ({ children, ...rest }) {
  return <BaseButton {...rest} >{children}</BaseButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
