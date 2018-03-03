import React, {Component} from 'react';
import {Button, Header, Icon, Modal, Form, Grid, Input, TextArea} from 'semantic-ui-react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import NewUserCard from './NewUserCard';
import FileUploader from '../../Profile/Components/FileUploader';
import upload from 'superagent';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            about: "",
            phone: "",
            job_title: "",
            birthday: "",
            current_company: "",
            location: "",
            file: {}
        }
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            about: this.state.about,
            phone: this.state.phone,
            job_title: this.state.job_title,
            birthday: this.state.birthday,
            current_company: this.state.current_company,
            location: this.state.location,
            password: this.state.password
        };
        upload.post('/api/users')
            .attach('theseNamesMustMatch', this.state.file)
            .field('newUser', JSON.stringify(newUser))
            .end((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successful user creation...");
                }
            });
        /*
      axios.post("/api/users", this.state).then(function(response){
          console.log(response)
      }).catch(function(e){
          console.log(e)
      })
      */
    };

    handleImageFile = (result) => {
        this.setState({file: result});
    };


    render() {
        return (
            <Modal trigger={<Button basic color="grey">New Account</Button>} blur basic size='small'>
                <Header icon='user' content='Create A New Account'/>
                <Modal.Actions style={{marginTop: "-3%"}}>

                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <NewUserCard userInfo={this.state}/>
                            </Grid.Column>

                            <Grid.Column>

                                <Form inverted style={{marginTop: "-8%"}}>
                                    <br/>
                                    <Form.Group widths='equal'>
                                        <Form.Input onChange={this.handleInputChange} label='First Name'
                                                    placeholder={this.state.firstName} type='text' name="firstName"/>
                                        <Form.Input onChange={this.handleInputChange} label='Last Name'
                                                    placeholder={this.state.lastName} type='text' name="lastName"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <FileUploader imageFile={this.handleImageFile} name="image_url"
                                                      onChange={this.handleInputChange} style={{marginBottom: "15px"}}/>
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                        <Form.Input onChange={this.handleInputChange} label='Email'
                                                    placeholder={this.state.email} type='text' name="email"/>
                                        <Form.Input onChange={this.handleInputChange} label='Location'
                                                    placeholder={this.state.location} type='text' name="location"/>
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                        <Form.Input label='Password' type='password'/>
                                        <Form.Input onChange={this.handleInputChange} label='Confirm Password'
                                                    type='password' name="password"/>
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                        {/* <Form.Input onChange={this.handleInputChange} label='image_url' placeholder='https://<Path To Image>' type='text' name="image_url"/> */}
                                        <Form.Input onChange={this.handleInputChange} label='Phone'
                                                    placeholder={this.state.phone} type='text' name="phone"/>
                                        <Form.Input onChange={this.handleInputChange} label='Birthday'
                                                    placeholder={this.state.birthday} type='text' name="birthday"/>
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                        <Form.Input onChange={this.handleInputChange} label='Current Company'
                                                    placeholder={this.state.current_company} type='text'
                                                    name="current_company"/>
                                        <Form.Input onChange={this.handleInputChange} label='Job Title'
                                                    placeholder={this.state.job_title} type='text' name="job_title"/>
                                    </Form.Group>


                                    <Form.TextArea style={{width: "110%"}} rows={10} onChange={this.handleInputChange}
                                                   label='About'
                                                   placeholder='Tell us more about you to display on your profile'
                                                   name="about"/>
                                    <Button color='teal' inverted onClick={this.handleFormSubmit}>Create
                                        Account</Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                </Modal.Actions>
            </Modal>
        )
    }
}

export default LoginModal;