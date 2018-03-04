import React, { Component } from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'


  class ReplyForm extends Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render(props) { 
          return ( 
            <div>
                    <Form style={{marginBottom: "2%", marginTop: "4%"}}>
                        <TextArea placeholder='Reply' />
                    </Form>

                    <Button.Group size='small'>
                        <Button basic color="grey">Submit</Button>
                        <Button.Or />
                        <Button basic color="grey">Cancel</Button>
                    </Button.Group>
             </div>
           )
      }
  }
   
  export default ReplyForm;