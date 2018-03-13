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
            password: "",
            password_confirm: "",
            file: {},
            image_urlError: "",
            logged: false,
            formError: true
        }
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });


    };

    validate = () => {
        if(this.state.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
             this.setState({emailError: false})
           
        }else {
            this.setState({emailError: true})
            this.setState({formError: true})

        }
        if(this.state.password == undefined || this.state.password.length < 8 || this.state.password.length > 15){
            this.setState({passwordError : true})
            this.setState({formError: true})
           
        }else {
             this.setState({passwordError : false})

        }
        if(this.state.password === this.state.password_confirm){
            this.setState({password_confirmError: false})
         
        } else {
            this.setState({password_confirmError: true})
            this.setState({formError: true})
        }
        if(this.state.firstName.length < 1){
            this.setState({firstNameError: true})
            this.setState({formError: true})
        } else {
            this.setState({firstNameError: false})
        }
        if(this.state.lastName.length < 1){
            this.setState({lastNameError: true})
            this.setState({formError: true})
        } else {
            this.setState({lastNameError: false})
        }
        if(this.state.location.length < 1){
            this.setState({locationError: true})
            this.setState({formError: true})
        } else {
            this.setState({locationError: false})
        }
        if(this.state.current_company.length < 1){
            this.setState({current_companyError: true})
            this.setState({formError: true})
        } else {
            this.setState({current_companyError: false})
        }
        if(this.state.job_title.length < 1){
            this.setState({job_titleError: true})
            this.setState({formError: true})
        } else {
            this.setState({job_titleError: false})
        }
        if(this.state.about.length < 1){
            this.setState({aboutError: true})
            this.setState({formError: true})
        } else {
            this.setState({aboutError: false})
        }
         if(this.state.file.preview === undefined){
            this.setState({image_urlError: true})
        } else {

            this.setState({image_urlError: false})
        }

        if(!this.state.emailError && !this.state.passwordError && !this.state.password_confirmError && !this.state.firstNameError && !this.state.lastNameError  && !this.state.locationError && !this.state.current_companyError && !this.state.job_titleError && !this.state.aboutError && !this.state.image_urlError ) {
            this.setState({formError : false});
        }else {
            this.setState({formError: true})

        }
       
    }

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
                    console.log(res);
                     this.setState({logged: true})
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


    isEmpty = (obj) => {

        if (obj == null) return true;
        if (obj.length > 0)    return false;
        if (obj.length === 0)  return true;
        if (typeof obj !== "object") return true;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
    }

    handleImageFile = (result) => {

        this.setState({file: result});
        console.log(result)
    };


    render() {
        
        return (
            <Modal trigger={<Button basic color="teal"><Icon name='user' />New Account</Button>} blur basic size='small'>
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
                                        <Form.Input onChange={this.handleInputChange} label='* First Name' error={this.state.firstNameError}
                                                    placeholder={this.state.firstName} type='text' name="firstName" onKeyUp={() => this.validate()}/>
                                        <Form.Input onChange={this.handleInputChange} label='* Last Name' onKeyUp={() => this.validate()}
                                                    placeholder={this.state.lastName} type='text' name="lastName" error={this.state.lastNameError}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <FileUploader imageFile={this.handleImageFile} name="image_url"
                                                      onChange={this.handleInputChange} style={{marginBottom: "15px"}}/>
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                      <Form.Input onChange={this.handleInputChange} label='* Email' error={this.state.emailError} onKeyUp={() => this.validate()}
                                                    placeholder={this.state.email} type='text' name="email"/>
                                                   
                                        <Form.Input onChange={this.handleInputChange} label='* Location' error={this.state.locationError}
                                                    placeholder={this.state.location} type='text' name="location"/>
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                       <Form.Input onChange={this.handleInputChange} label='* Password' error={this.state.passwordError} type='password' name="password" placeholder="8 - 15 characters" onKeyUp={() => this.validate()}/> 
                                      <Form.Input onChange={this.handleInputChange} label='* Confirm Password' error={this.state.password_confirmError} type='password' name="password_confirm" onKeyUp={() => this.validate()}/> 
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                        {/* <Form.Input onChange={this.handleInputChange} label='image_url' placeholder='https://<Path To Image>' type='text' name="image_url"/> */}
                                        <Form.Input onChange={this.handleInputChange} label='Phone'
                                                    placeholder={this.state.phone} type='text' name="phone"/>
                                        <Form.Input onChange={this.handleInputChange} label='Birthday'
                                                    placeholder="MM/DD/YYYY" type='text' name="birthday"/>
                                    </Form.Group>

                                    <Form.Group widths='equal'>
                                        <Form.Input onChange={this.handleInputChange} label='* Current Company'
                                                    placeholder={this.state.current_company} type='text' error={this.state.current_companyError}
                                                    name="current_company" onKeyUp={() => this.validate()}/>
                                        <Form.Input onChange={this.handleInputChange} label='* Job Title' error={this.state.job_titleError}
                                                    placeholder={this.state.job_title} type='text' name="job_title" onKeyUp={() => this.validate()}/>
                                    </Form.Group>


                                    <Form.TextArea style={{width: "110%"}} rows={10} onChange={this.handleInputChange}
                                                   label='* About'
                                                   error={this.state.aboutError}
                                                   placeholder='Tell us more about you to display on your profile'
                                                   name="about"
                                                   onKeyUp={() => this.validate()} />
                        <span>* required </span>

                        <Button color='teal' inverted onClick={this.handleFormSubmit} disabled={this.state.formError}>Create
                                        Account</Button>
                                        {this.state.logged ? <Redirect to={`/home/feed`}/> : null }
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