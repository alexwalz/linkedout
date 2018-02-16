import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Banner from './Components/Banner'
import About from './Components/About'
import { Grid, Container, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import ConnectButton from './Components/ConnectButton'
import EmailButton from './Components/EmailButton'
import ProfileFeed from './Components/ProfileFeed'
import LanguagesView from './Components/LanguagesView'


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
            first_name: "Alexander",
            last_name: "Walz",
            email: "alexwalz@icoud.com",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            phone: "801-661-4344",
            image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAA7hAAAAJDE2YzA2NDBkLWU0YzMtNDE2Zi1hMDcxLTY0YWFiNWZlZjM5ZQ.jpg",
            job_title: "Full Stack Developer",
            birthday: "10/29/1990",
            current_company: "Instructure",
            education: "Some College",
            languages: [
                "React.js",
                "Node.js",
                "MongoDb",
                "Sequelize",
                "MySql",
                "Javascript",
                "Jquery"
            ]
         }
    }

  

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() { 
        return ( 
            

        <div style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/greyzz.png')", backgroundPositionX: 'center', color:"grey" }}>
                   
                    <Container>
                            <Grid>
                                <Grid.Row>
                                <Grid.Column width={16}>
                                    <Banner first_name={this.state.first_name} last_name={this.state.last_name} job_title={this.state.job_title} image_url={this.state.image_url}/>
                                </Grid.Column>
                                </Grid.Row>


                                    <Grid.Row>

                                     <Grid.Column width={9} >
                                    </Grid.Column>

                                    <Grid.Column width={3} >
                                    <ConnectButton/>
                                    </Grid.Column>

                                    <Grid.Column width={3} >
                                        <EmailButton email={this.state.email}/>
                                    </Grid.Column>

                                    </Grid.Row>
                            
                                <Grid.Row>
                                <Grid.Column width={8}>

                                            <Grid.Row>
                                                <Grid.Column width={16}>
                                                     <About about={this.state.about}/>
                                                </ Grid.Column>

                                                <Grid.Column width={16}>

                                                    <LanguagesView/>

                                                </ Grid.Column>
                                                
                                            </Grid.Row>
                                    
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <ProfileFeed first_name={this.state.first_name} last_name={this.state.last_name} image_url={this.state.image_url}/>
                                </Grid.Column>

                                </Grid.Row>
                        </Grid>
                    </Container>     
          </div>

        
         )
    }
}
 
export default ProfilePage;