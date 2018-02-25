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
        this.renderUser= this.renderUser.bind(this)

        this.state = {
            loggedInUser:{
            },
            renderedUser:{
                firstName: "John",
                lastName: "Doe",
                email: "JohnDoe@johndoe.com",
                about: "Here is a bunch of filler information about a fella named John Doe.  You should only be seing this information is our website is broken.  If that is the case, please contact us and let us know that you are seing the generic 'State' information.",
                phone: "123-456-7890",
                image_url: "http://www.terry.uga.edu/digitalmarketing/images/icons/user.jpg",
                job_title: "Developer",
                birthday: "01/01/1990",
                current_company: "John Doe's Dev Company",
                education: "None",
                location: "Silicon Valley",
                languages: ["React", "Node", "Express", "HTML", "CSS", "Redux", "Handlebars", "Ruby", "Javascript", "Jquery"],
                connections:[],
                posts:[],
                url: ""
            }
        }
    }




    componentDidMount(){
        this.getLoggedInUser()

        axios.get('/api/users/'+this.props.match.params.id)
        .then(response => {
            if(this.state.renderedUser !== response.data){
            this.setState({renderedUser: response.data});
            this.setState({url: this.props.match.params.id})
            }else{
                console.log("Information already up to date")
            }
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });

    }

    componentDidUpdate(prevProps, prevState) {
        axios.get('/api/users/'+this.props.match.params.id)
        .then(response => {
            if(JSON.stringify(response.data) !== JSON.stringify(this.state.renderedUser)) {
                this.setState({renderedUser: response.data});
                this.setState({url: this.props.match.params.id})
            }else{
                 console.log("Information already up to date")
            }
    })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
    });
        
       
       }


renderUser =()=>{
    console.log("New API Request", this.props.match.params.id)
    axios.get('/api/users/'+this.props.match.params.id)
    .then(response => {
        if(this.state.renderedUser !== response.data){
            this.setState({renderedUser: response.data});
            this.setState({url: this.props.match.params.id})
        }else{
            console.log("Information already up to date")
        }
})
    .catch(error => {
        console.log('Error fetching and parsing data', error);
});
}

getLoggedInUser = () =>{
    axios.get('/api/users/login')
    .then(response => {
        this.setState({loggedInUser: response.data });
    }).catch(error => {
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
            {this.state.loggedInUser.loggedIn ? null : <SecondaryModal/>}  

                <Sidebar.Pushable>

                    <Sidebar as={Menu} animation='overlay' width='thin' icon='labeled'
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
                                        <Banner firstName={this.state.renderedUser.firstName} lastName={this.state.renderedUser.lastName}
                                                job_title={this.state.renderedUser.job_title} image_url={this.state.renderedUser.image_url}/>
                                    </Grid.Column>
                                </Grid.Row>


                                <Grid.Row>

                                    <Grid.Column width={9}>
                                    </Grid.Column>

                                    <Grid.Column width={3}>
                                    {this.state.loggedInUser.userId === this.props.match.params.id && this.state.loggedInUser.loggedIn ? null : <ConnectButton/> } 
                                        
                                    </Grid.Column>

                                    <Grid.Column width={3}>
                                    {this.state.loggedInUser.userId === this.props.match.params.id && this.state.loggedInUser.loggedIn ? null : <EmailButton email={this.state.email}/> } 
                                        
                                    </Grid.Column>

                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Grid.Row>

                                            <Grid.Column width={16}>

                                                <Bio userInfo={this.state.renderedUser} loggedInUserInfo={this.state.loggedInUser} url={this.state.url}/>
                                            
                                            </ Grid.Column>

                                            <Grid.Column width={16}>

                                                <About userInfo={this.state.renderedUser} loggedInUserInfo={this.state.loggedInUser} url={this.state.url}/>

                                            </ Grid.Column>

                                            <Grid.Column width={16}>

                                                <LanguagesView userInfo={this.state.renderedUser} loggedInUserInfo={this.state.loggedInUser} url={this.state.url}/>
                                            
                                            </ Grid.Column>

                                             <Grid.Column width={16} style={{marginTop:"10px"}}>

                                                <Connections userInfo={this.state.renderedUser} loggedInUserInfo={this.state.loggedInUser} url={this.state.url}/>
                                           
                                            </ Grid.Column>

                                            <Grid.Column width={16} style={{marginTop:"10px"}}>

                                                    <Newsfeed/>

                                            </ Grid.Column>


                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                            <Grid.Row>
                                                 <Grid.Column width={16} style={{marginBottom: "10px"}}>

                                                        {this.state.loggedInUser.userId === this.props.match.params.id && this.state.loggedInUser.loggedIn ?

                                                         <ShareBox  loggedInUser={this.state.loggedInUser}/> 

                                                         : null } 

                                                 </Grid.Column>
                                        
                                                 <Grid.Column width={16}>

                                                 <ProfileFeed userInfo={this.state.renderedUser} loggedInUserInfo={this.state.loggedInUser} url={this.state.url}/>

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
