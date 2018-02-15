import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ConnectButton = () => (
  <div style={{ marginTop: "10%"}}>
    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Connect
      </Button>
      <Label as='a' basic color='red' pointing='left'>183</Label>
    </Button>
    <br/>
    <br/>
    <Button as='div' labelPosition='right'>
      <Button color='blue'>
        <Icon name='comments' />
        Email
      </Button>
      <Label as='a' basic color='blue' pointing='left'> NEW </Label>
    </Button>

  </div>
)

export default ConnectButton