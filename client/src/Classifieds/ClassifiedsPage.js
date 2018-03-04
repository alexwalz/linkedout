import React, { Component } from 'react';
import {Grid, Container, Sidebar, Segment, Button, Menu, Image, Icon, Header, Divider} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import ClassifiedsInfo from './Components/ClassifiedsInfo';
import PostJob from './Components/PostJob';
import background from '../img/midnight.jpg';
import JobContainer from './Components/JobContainer';
import ContactInfoForm from './Components/ContactInfoForm';
import QualificationsForm from './Components/QualificationsForm';


class ClassifiedsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

         }
    }
    render() { 
        return ( 

            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPositionX: 'center',
                color: "white",
                backgroundSize: 'cover',
                paddingTop: 15, 
                paddingLeft: "2%", 
                paddingRight: "2%"
            }}>

            <Container>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.visible} icon='labeled'
                             vertical inverted style={{height: "100vh;"}}>
                        <Menu.Item name='home'>
                            <Link to="/"><Icon name='home'/>Home</Link>
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Link to="/profile/:id"><Icon name='user'/>My Profile</Link>
                        </Menu.Item>
                        <Menu.Item name='newspaper'>
                            <Link to="/feed"><Icon name='newspaper'/>Feed</Link>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                    
                    <Container style={{paddingTop: 110}}>
                        <Grid>
                        <Grid.Row>
                            
                            <Grid.Column width={16}>
                            <Divider horizontal>
                                <h2 textAlign="center" style={{ color: "white" }}>
                                    <Icon circular name='id card' />General Information
                                </h2>
                                </Divider>
                                <PostJob />
                            </Grid.Column>

                            <Grid.Column width={16}>
                            <Divider horizontal>
                                <h2 textAlign="center" style={{ color: "white" }}>
                                    <Icon circular name='briefcase' />Description and Qualifications
                                </h2>
                                </Divider>
                                <QualificationsForm />
                            </Grid.Column>
                                        
                            <Grid.Column width={16}>
                            <Divider horizontal>
                                <h2 textAlign="center" style={{ color: "white" }}>
                                    <Icon circular name='address book' />Contact Info
                                </h2>
                                </Divider>
                                <ContactInfoForm />
                            </Grid.Column>

                        </Grid.Row>


                                <JobContainer 
                                firstName={this.state.firstName} lastName={this.state.lastName}
                                job_title={this.state.job_title} image_url={this.state.image_url}
                                />

                        </Grid>
                    </Container>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                </Container>
                
                
            </div>
         )
    }
}
 
export default ClassifiedsPage;