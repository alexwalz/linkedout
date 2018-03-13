import React, { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card, Button, Image, Select, Step, Divider, Comment} from 'semantic-ui-react'
// import JobButton from './JobButton';
import axios from 'axios';



export default class PostJob extends Component {
  constructor(props) {
      super(props);
      this.state = {
          contact_name: "",
          phone_number: "",
          contact_email: "",
          additional_info: "",
          job_title: "",
          company_name: "",
          city: "",
          state: "",
          zip: "",
          position_description: "",
          position_responsibilities: "",
          position_qualifications: "",

          formsCollapsed: true,
        }
        
  }

    showForms = () => (
      this.state.formsCollapsed ? this.setState({formsCollapsed: false}) : this.setState({formsCollapsed: true})
    )

    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      // axios.post("/api/users", this.state).then(function(response){
      // })
    };
    renderDisplay(){
      return(
          <Step.Group fluid vertical style={{backgroundColor:"transparent", border: "1px solid white"}}>
              <Step active onClick={this.showForms}  style={{backgroundColor:"transparent"}}>
              <Icon name='plus' color="grey" />
              <Step.Content>
                <Step.Title style={{color: "#67C8D3"}}>Job Posts</Step.Title>
                <Step.Description style={{color: "white"}}>Click Here To Create A New Job Post</Step.Description>
              </Step.Content>
              </Step>
       </Step.Group>

        )
    }

  render() { 

    const { formsCollapsed } = this.state

      let categoryOptions =[
        {key: 'front', value: 'front', text: 'Frontend Developer'},
        {key: 'back', value: 'back', text: 'Backend Developer'},
        {key: 'engineer', value: 'engineer', text: 'Software Engineer'},
        {key: 'full', value: 'full', text: 'Fullstack Developer'},
        {key: 'other', value: 'other', text: 'Other'}
      ]
      let salaryFromOptions =[
        
        // {key: 'from', value: 'from', text: 'Salary Range From'},
        {key: '40,000', value: '40,000', text: '$40,000'},
        {key: '50,000', value: '50,000', text: '$50,000'},
        {key: '60,000', value: '60,000', text: '$60,000'},
        {key: '70,000', value: '70,000', text: '$70,000'},
        {key: '80,000', value: '80,000', text: '$80,000'},
        {key: '90,000', value: '90,000', text: '$90,000'},
        {key: '100,000', value: '100,000', text: '$100,000'},
        {key: '>120,000', value: '>120,000', text: '>$120,000'},
      ]
      let salaryToOptions =[
        
        // {key: 'to', value: 'to', text: 'Salary Range To'},
        {key: '40,000', value: '40,000', text: '$40,000'},
        {key: '50,000', value: '50,000', text: '$50,000'},
        {key: '60,000', value: '60,000', text: '$60,000'},
        {key: '70,000', value: '70,000', text: '$70,000'},
        {key: '80,000', value: '80,000', text: '$80,000'},
        {key: '90,000', value: '90,000', text: '$90,000'},
        {key: '100,000', value: '100,000', text: '$100,000'},
        {key: '>120,000', value: '>120,000', text: '>$120,000'},
      ]
      let jobType =[
        
        {key: 'full', value: 'full', text: 'Full Time'},
        {key: 'part', value: 'part', text: 'Part Time'},
        {key: 'contract', value: 'contract', text: 'Contract'},
        {key: 'temp', value: 'temp', text: 'Temporary'},
      ]
      let eduLevel =[
        
        {key: 'none', value: 'none', text: 'None'},
        {key: 'advanced', value: 'advanced', text: 'Advanced Degree'},
        {key: '4', value: '4', text: '4-Year Degree'},
        {key: '2', value: '2', text: '2-Year Degree'},
        {key: 'high', value: 'high', text: 'High School'},
      ]
      let yearsOfExp =[
        
        {key: 'none', value: 'none', text: 'None'},
        {key: '1-2', value: '1-2', text: '1-2 Years'},
        {key: '3-4', value: '3-4', text: '3-4 Years'},
        {key: '5-7', value: '5-7', text: '5-7 Years'},
        {key: '8-10', value: '8-10', text: '8-10 Years'},
        {key: '10', value: '10', text: '>10 Years'},
      ]

      return (  
    <div>
      <Container style={{width: '70%'}} >
          {this.renderDisplay() }
      </Container>
        {/* <Button circular color="grey" icon='comments' onClick={this.showForms}/> */}
        
{/* /////////////////////////////////////////////// GENERAL INFO FORM////////////////////////////////////////////////////////// */}
                  
      <Comment.Group style={{marginLeft: 'auto', marginRight: 'auto'}} collapsed={formsCollapsed}>
        <Comment>

                  <Divider horizontal>
                      <h2 textAlign="center" style={{ color: "white" }}>
                          <Icon circular name='id card' />General Information
                      </h2>
                  </Divider>


              <Segment inverted style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')", border: "1px solid white"}}>
              
                    <Form inverted>
                          
                    <br/>
                        

                        <Form.Group widths='equal'>
                          <Form.Input onChange={this.handleInputChange} label='Job Title' placeholder='ex. Project Manager' type='text' name="job_title"/>
                        </Form.Group>
                              
                        <Form.Group widths='equal'>
                          <Form.Input onChange={this.handleInputChange} label='Company Name' placeholder='ex. Adobe' type='text' name="company_name"/>                             
                          <Form.Select onChange={this.handleInputChange} label='Category' widths='equal' fluid label='Category' type='text' options={categoryOptions} />
                        </Form.Group>
                              
                        <Form.Group style={{marginLeft: .5, marginRight: .5}} widths='equal'>
                          <Form.Select onChange={this.handleInputChange}  fluid label='Salary' placeholder='From' type='text' options={salaryFromOptions} />
                          <Form.Select onChange={this.handleInputChange}  fluid label='Range' placeholder='To' type='text' options={salaryToOptions} />
                        </Form.Group>

                        <Form.Group widths='equal'>
                          <Form.Input onChange={this.handleInputChange} label='City' placeholder='ex. Salt Lake City' type='text' name="city"/>
                              
                          <Form.Input onChange={this.handleInputChange} label='State' type='state' name="state"/>
                          <Form.Input onChange={this.handleInputChange} label='Zip' type='zip' name="zip"/>
                        </Form.Group>

                        <Form.Group widths='equal'>
                          <Form.Select onChange={this.handleInputChange}  fluid label='Job Type' type='text' options={jobType} style={{marginRight: 6}} />

                          <Form.Select onChange={this.handleInputChange}  fluid label='Education Level' type='text' options={eduLevel} style={{marginRight: 6}} />

                          <Form.Select onChange={this.handleInputChange}  fluid label='Years of Experience' type='text' options={yearsOfExp} style={{marginRight: 6}} />
                        </Form.Group>
                              
                    </Form>
                  
              </Segment>

      </Comment>
    </Comment.Group>


              <Grid>
              <Grid.Column width={16} >
              </Grid.Column>
              </Grid>
                         
    



{/* /////////////////////////////////////////////// QUALIFICATIONS FORM////////////////////////////////////////////////////////// */}
    <Comment.Group style={{marginLeft: 'auto', marginRight: 'auto'}} collapsed={formsCollapsed}>
      <Comment widths='equal'>

                  <Divider horizontal>
                        <h2 textAlign="center" style={{ color: "white" }}>
                          <Icon circular name='briefcase' />Description and Qualifications
                        </h2>
                  </Divider>

              <Segment inverted   style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')", border: "1px solid white"}}>
                                
                    <Form inverted>
                          
                        <br/>

                        <Form.TextArea rows={3} onChange={this.handleInputChange} label='Position Description' placeholder='Enter Text' name="position_description"/>

                        <Form.TextArea rows={6} onChange={this.handleInputChange} label='Position Responsibilities' placeholder='Enter Text' name="position_responsibilities"/>

                        <Form.TextArea rows={6} onChange={this.handleInputChange} label='Position Qualifications' placeholder='Enter Text' name="position_qualifications"/>

                            <Grid>
                            <Grid.Column width={16} >
              
                
                            </Grid.Column>
                            </Grid>  
                        
                    </Form>
                    
              </ Segment>
      </Comment>
    </Comment.Group>
              
            <Grid>
            <Grid.Column width={16} >
            </Grid.Column>
            </Grid>


{/* /////////////////////////////////////////////// CONTACT INFO FORM////////////////////////////////////////////////////////// */}
          
    <Comment.Group style={{marginLeft: 'auto', marginRight: 'auto'}} collapsed={formsCollapsed}>
      <Comment widths='equal'>

                  <Divider horizontal>
                        <h2 textAlign="center" style={{ color: "white" }}>
                            <Icon circular name='address book' />Contact Info
                        </h2>
                  </Divider>

              <Segment inverted   style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')", border: "1px solid white"}}>
                    
                    <Form inverted>
                          
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

                    </Form>
                    
          </ Segment>

          </Comment>
                </Comment.Group>
              <br/>
      </div>
      )
  }
}


