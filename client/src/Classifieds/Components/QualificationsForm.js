import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select, Step} from 'semantic-ui-react'
import axios from 'axios';

class QualificationsForm extends Component {
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
                          
                        <div><h3>Description and Qualifications</h3></div>
                        <br/>

                        <Form.TextArea rows={3} onChange={this.handleInputChange} label='Position Description' placeholder='Enter Text' name="position_description"/>

                        <Form.TextArea rows={6} onChange={this.handleInputChange} label='Position Responsibilities' placeholder='Enter Text' name="position_responsibilities"/>

                        <Form.TextArea rows={6} onChange={this.handleInputChange} label='Position Qualifications' placeholder='Enter Text' name="position_qualifications"/>

                              

                    </Form>
                    
                </ Segment>
                <Grid>
                          <Grid.Column width={16} >
              
                
              </Grid.Column>
              </Grid>
                </div>
        )
    }
}

export default QualificationsForm;