import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Banner from './Components/Banner'
import About from './Components/About'
import { Grid, Container, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

  

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() { 
        return ( 

        <div>

                <Icon name="list" onClick={this.toggleVisibility} size='large' sytle={{ marginLeft: "2%", marginTop: "2%"}} />
                <Sidebar.Pushable>
                <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.visible} icon='labeled' vertical inverted style={{height: "100vh;"}}>
                    <Menu.Item name='home'>
                    <Icon name='home' />
                    Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                    <Icon name='gamepad' />
                    Games
                    </Menu.Item>
                    <Menu.Item name='camera'>
                    <Icon name='camera' />
                    Channels
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                   
                    <Container>
                            <Grid>
                                <Grid.Row>
                                <Grid.Column width={16}>
                                    <Banner/>
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