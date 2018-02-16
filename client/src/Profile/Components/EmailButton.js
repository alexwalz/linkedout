import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const EmailButton = (props) => (
    <div
    >
      <Button as='div' labelPosition='right'>
        <Button color='blue' href={"mailto:"+props.email}>
          <Icon name='comments'  />
          Email
        </Button>
        <Label as='a' basic color='blue' pointing='left'> NEW </Label>
      </Button>
  
    </div>
  )
  
  export default EmailButton