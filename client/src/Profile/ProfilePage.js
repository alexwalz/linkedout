import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Banner from './Components/Banner'
import About from './Components/About'
import { Grid, Container, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import {Link} from "react-router-dom"

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

  

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() { 
        return ( 

        <div>

                
                <Sidebar.Pushable>
                <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.visible} icon='labeled' vertical inverted style={{height: "100vh;"}}>
                    <Menu.Item name='home'>
                    <Link to="/" ><Icon name='home' />Home</Link>
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                    <Link to="/profile/:id" ><Icon name='user' />My Profile</Link>
                    </Menu.Item>
                    <Menu.Item name='newspaper'>
                    <Link to="/feed" ><Icon name='newspaper' />Feed</Link>
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                   
                    <Container>
                            <Grid>
                                <Grid.Row>
                                <Grid.Column width={16}>
                                    <Banner/>
                                    <br/>
                                    <Icon name="list" onClick={this.toggleVisibility} size='large' sytle={{ marginLeft: "2%", marginTop: "2%"}} />
                                </Grid.Column>
                                </Grid.Row>
                            
                                <Grid.Row>
                                <Grid.Column width={8}>
                                    <About/>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <About/>
                                </Grid.Column>

                                <Grid.Column width={16}>
                                    <br/>
                                    <About/>
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