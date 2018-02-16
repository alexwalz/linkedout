import React, { Component } from 'react';
import Nav from '../Feed/Components/Nav'
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
            <Nav color="black" style={{position: "fixed"}}/>
                   
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
            
            
          </div>
        
         )
    }
}
 
export default ProfilePage;