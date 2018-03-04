import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select, Step} from 'semantic-ui-react'
import axios from 'axios';

class ContactInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
  
          }
    }




    render() {

        return(
            <div>
<Segment inverted   style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')", border: "1px solid white"}}>
                    
                    <Form inverted>
                          
                        <div><h3>Contact Info</h3></div>
                        <br/>

                              <Form.Group widths='equal'>
                              <Form.Input onChange={this.handleInputChange} label='Contact Name' placeholder='' type='text' name="contact_name"/>
                              </Form.Group>
                              
                              
                              <Form.Group widths='equal'>
                              <Form.Input onChange={this.handleInputChange} label='Contact Phone Number' placeholder='(###) ###-####' type='text' name="phone_number"/>

                              <Form.Input onChange={this.handleInputChange} label='Contact Email' placeholder='' type='text' name="contact_email"/>
                              </Form.Group>
                              

                              <Form.TextArea rows={4} onChange={this.handleInputChange} label='Additional Info' placeholder='Enter Text' name="additional_info"/>

                              <Form.Checkbox inline label='I agree to the terms and conditions' />
                              <Button color='teal' inverted onClick={this.handleFormSubmit}>Post Job</Button>
                              {/* <LoginModal/> */}

                    </Form>
                </ Segment>
                </div>
        )
    }
}

export default ContactInfoForm;