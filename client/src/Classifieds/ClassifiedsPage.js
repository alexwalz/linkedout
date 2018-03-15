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
import ApplyHeader from './Components/ApplyHeader';

 

class ClassifiedsPage extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this)
        this.state = {
            update: false,
            all: [],
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
                    this.state.all.push(response.data);
                }
            })
            .catch(e => console.log(e));
    };

    componentDidMount(){
        axios
        .get("/api/classifieds")
        .then(response => {
          this.setState({all: response.data});
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        axios
          .get("/api/classifieds/")
          .then(response => {
            if (
              JSON.stringify(response.data) !==
              JSON.stringify(this.state.all)
            ) {
              this.setState({ all: response.data});
              this.setState({update: false})
            } else {
            }
            
          })
          .catch(error => {
            console.log("Error fetching and parsing data", error);
          });
      }

    update = () => {
        this.setState({update: true})
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
                    
                    
                    
                    
                    <Container style={{paddingTop: 85}}>
                        <Grid>
                        
                        <Grid.Row>
                            <Grid.Column width={16}>
                            
                                <PostJob cformData={this.cformData}
                                ClassifiedInfo={this.state}
                                update={this.update}
                                />

                            </Grid.Column>
                        </Grid.Row>
                        <ApplyHeader />
                        <br/>
                            {
                            this.state.all.slice(0).reverse().map((cfied, index) => (
                                <Grid.Column width={16}>
                                    <JobContainer cInfo={cfied}/>
                                    </Grid.Column>
                                )
                                )
                            }
                                {/* <JobContainer cInfo={this.state}/> */}
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