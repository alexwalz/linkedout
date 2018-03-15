import React, { Component } from 'react';
import {Grid, Container, Sidebar, Segment, Button, Menu, Image, Icon, Header, Divider} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import ClassifiedsInfo from './Components/ClassifiedsInfo';
import PostJob from './Components/PostJob';
import background from '../img/midnight.jpg';
import JobContainer from './Components/JobContainer';
// import ContactInfoForm from './Components/ContactInfoForm';
// import QualificationsForm from './Components/QualificationsForm';
import axios from 'axios';

let all = [];

class ClassifiedsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }

    cformData = (result) => {
        this.setState(result);
        console.log(result)
        axios.get('/api/classifieds')
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    console.log(".... data");
                    console.log(response.data);
                    all.push(response.data);
                }
            })
            .catch(e => console.log(e));
    };

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
                    
                    
                    
                    
                    <Container style={{paddingTop: 85}}>
                        <Grid>
                        
                        <Grid.Row>
                            <Grid.Column width={16}>
                            
                                <PostJob cformData={this.cformData}
                                ClassifiedInfo={this.state}
                                />

                            </Grid.Column>
                        </Grid.Row>
                            {
                               all.map((cfied, index) => (
                                    <JobContainer cInfo={cfied}/>
                                )
                                )
                            }
                                <JobContainer cInfo={this.state}/>
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