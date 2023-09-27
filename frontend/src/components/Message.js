import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({variant,children}) {
  return (
    <Alert.Heading as='h4' variant={variant}>
            {children}
    </Alert.Heading>
  )
}

export default Message