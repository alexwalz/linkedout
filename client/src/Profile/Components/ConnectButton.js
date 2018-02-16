import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ConnectButton = () => (
  <div>
    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Connect
      </Button>
      <Label as='a' basic color='red' pointing='left'>183</Label>
    </Button>

  </div>
)

export default ConnectButton