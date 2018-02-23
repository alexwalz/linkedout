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
import {Redirect} from 'react-router-dom'
import SecondaryModal from '../Login/Components/SecondaryLoginModal'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: "",
            visible: false,
            loggedIn: false,
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
            connections:[],
            posts:[]

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
        if(languages.length > 5){
            for(var i =0; i < 5; i++){
              this.state.fiveArr.push(languages[i])
            }
        }else {
            this.state.fiveArr = languages
        }
        
        
    }

    componentDidMount(){
        this.renderUser();
        this.getLoggedInUser()
        
    }

    componentDidUpdate(){
        this.renderUser()
    }

renderUser =()=>{
    axios.get('/api/users/'+this.props.match.params.id)
    .then(response => {
        this.setState(response.data );
    }).then(function(){
        //(this.state.loggedIn) ? null : <Redirect to="/"/>     *** NOT WORKING.***
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
}

getLoggedInUser = () =>{
    axios.get('/api/users/login')
    .then(response => {
        console.log("Logged In User")
        console.log(response)
        this.setState({loggedInUser: response.data.userId });
        this.setState({loggedIn: response.data.loggedIn})
        this.languageArray(this.state.languages);
        this.limit5(this.state.languages);
    }).then(function(){
        if(this.state.loggedIn === false){
            console.log("No User Is Logged In"),
            <Redirect to={"/"}/>
        }
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
            {this.state.loggedIn ? null : <SecondaryModal/>}

                <Sidebar.Pushable>


             

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
                                    {this.state.loggedInUser === this.props.match.params.id && this.state.loggedIn ? null : <ConnectButton/> } 
                                        
                                    </Grid.Column>

                                    <Grid.Column width={3}>
                                    {this.state.loggedInUser === this.props.match.params.id && this.state.loggedIn ? null : <EmailButton email={this.state.email}/> } 
                                        
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
                                                     location={this.state.location}
                                                     loggedInUser={this.state.loggedInUser} url={this.props.match.params.id}/>
                                            </ Grid.Column>

                                            <Grid.Column width={16}>
                                                <About about={this.state.about}/>
                                            </ Grid.Column>

                                            <Grid.Column width={16}>
                                                <LanguagesView 
                                                languages={this.state.languages}
                                                limit5={this.state.fiveArr}
                                                languagesDrag={this.state.dragLanguages}
                                                loggedInUser={this.state.loggedInUser}
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

                                                        {this.state.loggedInUser === this.props.match.params.id && this.state.loggedIn ? <ShareBox firstName={this.state.firstName} lastName={this.state.lastName} image_url={this.state.image_url} loggedInUser={this.state.loggedInUser}/> : null } 

                                                 </Grid.Column>
                                        
                                                 <Grid.Column width={16}>
                                                 <ProfileFeed firstName={this.state.firstName} lastName={this.state.lastName}
                                                     image_url={this.state.image_url} loggedInUser={this.state.loggedInUser}/>
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
