import React, {Component} from 'react';
import Parallax from 'react-springy-parallax'
import Banner from './Components/Banner'
import About from './Components/About'
import Languages from './Components/Languages'
import {Grid, Container, Sidebar, Segment, Button, Menu, Image, Icon, Header} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import ConnectButton from './Components/ConnectButton'
import EmailButton from './Components/EmailButton'
import ProfileFeed from './Components/ProfileFeed'
import LanguagesView from './Components/LanguagesView'
import Bio from './Components/Bio'
import ShareBox from '../Feed/Components/ShareBox'
import Connections from './Components/Connections'
import Newsfeed from './Components/NewsFeed'
import background from '../img/midnight.jpg'
import axios from 'axios'


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            firstName: "",
            lastName: "",
            email: "",
            about: "",
            phone: "",
            image_url: "",
            job_title: "",
            birthday: "",
            current_company: "",
            education: "",
            location: "",
            languages: [],
            dragLanguages : [],
            fiveArr: [],
            connections:[
                {
                    name: "Alex Walz",
                    image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAA7hAAAAJDE2YzA2NDBkLWU0YzMtNDE2Zi1hMDcxLTY0YWFiNWZlZjM5ZQ.jpg",
                    id: "12345",
                },
                {
                    name: "Kurt Roberts",
                    image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAxcAAAAJGY4MzNmNmMzLWMwM2QtNGQ4Ny1hYWZhLTQ0MTkzYzA5NzRiYQ.jpg",
                    id: "234lkjsdf",
                },
                {
                    name: "Cesar Caceres",
                    image_url: "https://media.licdn.com/media/AAMABADGAAwAAQAAAAAAABCdAAAAJGE2ZDM1NjAzLWQzN2QtNGViMS05MWY0LWQxNzBjNDgyOTE3Mg.jpg",
                    id: "asldkjfsdfj",
                },
                {
                    name: "Andrew Reyes-Cairo",
                    image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAwJAAAAJDQyNTQ2NDcyLTdkODItNDM0Ni1iMDVmLThmYWM3NTg5YzdmMw.jpg",
                    id: "asldfusdofijsdf",
                },
                {
                    name: "Curtis Lytle",
                    image_url: "https://media.licdn.com/media/AAMABADuAAgAAQAAAAAAAA9ZAAAAJDM1YWEwYWQ3LTFmOWEtNDQ0Yi1hNDgxLTJkMTNjZTZkMTdmNQ.bin",
                    id: "23423lkjfs443w32",
                },
            ],
            posts:[
                {
                    messageType:"",
                    message:"",
                    date:""
                }
            ]

        }
    }


    toggleVisibility = () => this.setState({visible: !this.state.visible})


    //function to pass languages that can be draggable
    languageArray(languages){
        for (var i = 0; i < languages.length; i++){
            var div = {content: <Languages language={languages[i]}/>}
            this.state.dragLanguages.push(div)
        }
    }

     limit5(languages){
        for(var i =0; i < 5; i++){
          this.state.fiveArr.push(languages[i])
        }
        
    }

    componentDidMount(){
        this.renderUser()
    }

renderUser =()=>{
    axios.get('/api/users/'+this.props.match.params.id)
    .then(response => {
        this.setState(response.data );
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
}


   

    render() {
        return (

            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPositionX: 'center',
                color: "grey"
            }}>


                <Sidebar.Pushable>

                {this.renderUser()}

                    <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.visible} icon='labeled'
                             vertical inverted style={{height: "100vh"}}>
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
                                        <Banner firstName={this.state.firstName} lastName={this.state.lastName}
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
                                                <Bio firstName={this.state.firstName} lastName={this.state.lastName}
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
                                                <LanguagesView languages={this.state.languages}
                                                limit5={this.state.fiveArr}
                                                languagesDrag={this.state.dragLanguages}
                                                />
                                            </ Grid.Column>

                                             <Grid.Column width={16} style={{marginTop:"10px"}}>
                                                <Connections exampleMessage="This is my message" connections={this.state.connections}/>
                                            </ Grid.Column>

                                            <Grid.Column width={16} style={{marginTop:"10px"}}>
                                                    <Newsfeed/>
                                            </ Grid.Column>


                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                            <Grid.Row>
                                                 <Grid.Column width={16} style={{marginBottom: "10px"}}>
                                                    <ShareBox firstName={this.state.firstName} lastName={this.state.lastName} image_url={this.state.image_url}/>
                                                 </Grid.Column>
                                        
                                                 <Grid.Column width={16}>
                                                 <ProfileFeed firstName={this.state.firstName} lastName={this.state.lastName}
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
