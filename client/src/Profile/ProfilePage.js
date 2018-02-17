import React, {Component} from 'react';
import Parallax from 'react-springy-parallax'
import Banner from './Components/Banner'
import About from './Components/About'
import {Grid, Container, Sidebar, Segment, Button, Menu, Image, Icon, Header} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import ConnectButton from './Components/ConnectButton'
import EmailButton from './Components/EmailButton'
import ProfileFeed from './Components/ProfileFeed'
import LanguagesView from './Components/LanguagesView'
import Bio from './Components/Bio'
import ShareBox from '../Feed/Components/ShareBox'


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            first_name: "John",
            last_name: "Doe",
            email: "JohnDoe@gmail.com",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            phone: "801-123-4567",
            image_url: "https://pbs.twimg.com/profile_images/543459641263665152/9-Y39lzm.jpeg",
            job_title: "Full Stack Developer",
            birthday: "10/29/1990",
            current_company: "Instructure",
            education: "Some College",
            location: "Mobile, Alabama",
            languages: [
                "React.js",
                "Node.js",
                "MongoDb",
                "Sequelize",
                "MySql",
                "Javascript",
                "Jquery",
                "Bootstrap"
            ],
            connections:[
                "<Mongo User Id>",
                "<Mongo User Id>",
                "<Mongo User Id>",
                "<Mongo User Id>",
                "<Mongo User Id>",
                "<Mongo User Id>",
                "<Mongo User Id>",
            ]
        }
    }


    toggleVisibility = () => this.setState({visible: !this.state.visible})

    render() {
        return (


            <div style={{
                backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/greyzz.png')",
                backgroundPositionX: 'center',
                color: "grey"
            }}>


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

                        <Container style={{paddingTop: 62}}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Banner first_name={this.state.first_name} last_name={this.state.last_name}
                                                job_title={this.state.job_title} image_url={this.state.image_url}/>
                                    </Grid.Column>
                                </Grid.Row>


                                <Grid.Row>

                                    <Grid.Column width={9}>
                                    </Grid.Column>

                                    <Grid.Column width={3}>
                                        <ConnectButton/>
                                    </Grid.Column>

                                    <Grid.Column width={3}>
                                        <EmailButton email={this.state.email}/>
                                    </Grid.Column>

                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={8}>

                                        <Grid.Row>

                                            <Grid.Column width={16}>
                                                <Bio first_name={this.state.first_name} last_name={this.state.last_name}
                                                     email={this.state.email} phone={this.state.phone}
                                                     education={this.state.education}
                                                     company={this.state.current_company}
                                                     jobTitle={this.state.job_title} 
                                                     birthday={this.state.birthday}
                                                     location={this.state.location}/>
                                            </ Grid.Column>

                                            <Grid.Column width={16}>
                                                <About about={this.state.about}/>
                                            </ Grid.Column>

                                            <Grid.Column width={16}>
                                                <LanguagesView languages={this.state.languages}/>
                                            </ Grid.Column>


                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                            <Grid.Row>
                                                 <Grid.Column width={16} style={{marginBottom: "10px"}}>
                                                    <ShareBox first_name={this.state.first_name} last_name={this.state.last_name} image_url={this.state.image_url}/>
                                                 </Grid.Column>
                                        
                                                 <Grid.Column width={16}>
                                                 <ProfileFeed first_name={this.state.first_name} last_name={this.state.last_name}
                                                     image_url={this.state.image_url}/>
                                                </Grid.Column>

                                            </Grid.Row>
                                    </Grid.Column>

                                </Grid.Row>
                            </Grid>
                        </Container>

                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>


        )
    }
}

export default ProfilePage;