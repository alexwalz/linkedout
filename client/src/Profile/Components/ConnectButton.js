import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ConnectButton = () => (
  <div>
  <Button.Group>
    <Button basic color="grey"> Connect </Button>
    <Button.Or />
    <Button basic color="teal">Email Me</Button>
  </Button.Group>

  </div>
)

export default ConnectButton