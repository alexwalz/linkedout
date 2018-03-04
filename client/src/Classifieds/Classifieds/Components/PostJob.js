import React , { Component } from 'react'
import { Container, Grid, Segment, Header, Icon, Form, TextArea, Card,  Button, Image, Select, Step} from 'semantic-ui-react'
import JobButton from './JobButton';
import axios from 'axios';


class PostJob extends Component {
  constructor(props) {
      super(props);
      this.state = {

        }
  }


  handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      axios.post("/api/users", this.state).then(function(response){
      })
    };


  render() { 

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

          
              <Grid columns={2} >
              <Grid.Row >
              <Grid.Column width={16}>
                  
                      <Segment inverted   style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')", border: "1px solid white"}}>
                          
                          <Form inverted>
                          
                          
                              <Form.Group widths='equal'>
                              <Form.Input onChange={this.handleInputChange} label='Job Title' placeholder='ex. Project Manager' type='text' name="jobTitle"/>
                              </Form.Group>
                              
                              <Form.Group widths='equal'>
                              <Form.Input onChange={this.handleInputChange} label='Company Name' placeholder='ex. Adobe' type='text' name="companyName"/>                             
                              <Form.Select onChange={this.handleInputChange} label='Category' widths='equal' fluid label='Category' placeholder='Select Category' type='text' options={categoryOptions} />
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
                              <Form.Select onChange={this.handleInputChange}  fluid label='Job Type' placeholder='Job Type' type='text' options={jobType} style={{marginRight: 6}} />

                              <Form.Select onChange={this.handleInputChange}  fluid label='Education Level' type='text' options={eduLevel} style={{marginRight: 6}} />

                              <Form.Select onChange={this.handleInputChange}  fluid label='Years of Experience' type='text' options={yearsOfExp} style={{marginRight: 6}} />
                              </Form.Group>
                              <br/>
                              </Form>
                              
                          </Segment>

                          <Grid>
                          <Grid.Column width={16} >
              
                
              </Grid.Column>
              </Grid>
                         

              </Grid.Column>

              
              </Grid.Row>

          </Grid>
      </div>
      )
  }
}


export default PostJob;