import React, { Component } from 'react';
import { Grid, Container, Segment, Button, Menu, Image, Icon, Header, Dimmer, Loader, Divider } from 'semantic-ui-react'
import FeedIdentity from './Components/FeedIdentity';
import ShareBox from './Components/ShareBox';
import FeedContainer from './Components/FeedContainer';
import NewsFeed from '../Profile/Components/NewsFeed';
import axios from 'axios';
import Banner from '../Profile/Components/Banner'
import background from "../img/midnight.jpg";
import UserCard from '../Login/Components/FeedUserCard'
import FeaturedJobContainer from './Components/FeaturedJobContainer'
import FeedShareBox from './Components/ShareBox'
import NewProjectBox from '../Profile/Components/ProjectShareBox'
import Languages from '../Profile/Components/LanguagesView'
import { Redirect } from "react-router-dom"
import AdSense from 'react-adsense'

class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this)
        
        this.state = {
          update: false,
          loggedInUser: {
            firstName: "John",
            lastName: "Doe",
            email: "JohnDoe@johndoe.com",
            about:
              "Here is a bunch of filler information about a fella named John Doe.  You should only be seing this information is our website is broken.  If that is the case, please contact us and let us know that you are seing the generic 'State' information.",
            phone: "123-456-7890",
            image_url:
              "http://www.terry.uga.edu/digitalmarketing/images/icons/user.jpg",
            job_title: "Developer",
            birthday: "01/01/1990",
            current_company: "John Doe's Dev Company",
            education: "None",
            location: "Silicon Valley",
            languages: [
              "React",
              "Node",
              "Express",
              "HTML",
              "CSS",
              "Redux",
              "Handlebars",
              "Ruby",
              "Javascript",
              "Jquery"
            ],
            connections: [],
            posts: [],
            url: ""
          }
        };
      }

      update = () => {
        this.setState({update: true})
    }
    
      componentDidMount() {
        this.getLoggedInUser();
      }
    
      getLoggedInUser = () => {
        axios
          .get("/api/users/login")
          .then(response => {
            this.setState({ loggedInUser: response.data.userData });
          })
          .catch(error => {
            console.log("Error fetching and parsing data", error);
          });
      };


renderFeedPage(){   
    return ( 
      <div>
        {this.state.loggedInUser ?
        <div style={{
            background: `url(${background}) no-repeat center center fixed`,
            webkitBackgroundSize: "cover",
            mozBackgroundSize: "cover",
            backgroundSize: "cover",
            backgroundSize: "cover",
        }}>
             
                 
                <Grid>

                {/* <Grid.Row>
                    <Grid.Column width={16}>
                        <Banner
                        userInfo={this.state.loggedInUser}
                        />
                     </Grid.Column>
                </Grid.Row> */}

                 <Grid.Row  style={{marginTop: "5%"}}>

                 <Grid.Column width={5} style={{marginLeft: "2%"}}>
                            <Grid>
                                <Grid.Row style={{maxWidth:"450px", minWidth:"350px"}}>
                                    <Grid.Column width={16} style={{marginTop:"15%"}}>
                                         <FeedShareBox loggedInUser={this.state.loggedInUser} renderUser={this.update} />
                                    </Grid.Column>
                                    <Grid.Column width={16} style={{marginTop:"3%"}}>
                                        <NewProjectBox loggedInUser={this.state.loggedInUser}/>
                                    </Grid.Column>
                                    <Grid.Column width={16} style={{marginTop:"3%"}}>
                                        <UserCard userInfo={this.state.loggedInUser}/>
                                    </Grid.Column>
                                    <Grid.Column width={16} style={{marginTop:"3%"}}>
                                        <Divider horizontal><h3 textAlign="center" style={{ color: "white" }}><Icon circular name='info' />My Languages</h3></Divider>
                                        <Languages loggedInUserInfo={this.state.loggedInUser} userInfo={this.state.loggedInUser}/>
                                    </Grid.Column>
                                    <Grid.Column width={16} style={{marginTop:"3%"}}>
                                        <Divider horizontal><h3 textAlign="center" style={{ color: "white" }}><Icon circular name='newspaper' />News Articles</h3></Divider>
                                        <NewsFeed />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                </Grid.Column>


                 <Grid.Column width={7}>

                            <Grid>
                                <Grid.Row style={{maxWidth:"650px", minWidth:"500px"}}>
                                    <Grid.Column width={16}>
                                        <FeaturedJobContainer />
                                    </Grid.Column>

                                    <Grid.Column width={16}>
                                        <FeedContainer  loggedInUser={this.state.loggedInUser} renderUser={this.update}/>
                                    </Grid.Column>

                                </Grid.Row>
                            </Grid>

                </Grid.Column>

                <Grid.Column width={4}>

                        <AdSense.Google client='ca-pub-7961305018548600'
                        slot='7806394673'
                        />

                        {/* style={{width: 500, height: 300, float: 'left'}}
                        format=''  */}

                </Grid.Column>


                </Grid.Row>
            </Grid>

                
        
        </div>
          : <Redirect to={`/`}/>}
      </div>

   
    )
}


renderLoaderPage(){
    return(
        <Segment style={{height: "100vh"}}>
        <Dimmer active>
          <Loader size='massive' style={{marginTop: "5%", color: "#7EC6D1"}}><h1>Loading Your Feed</h1></Loader>
        </Dimmer>
      </Segment>
    )
}


    render() { 
        return ( 
      
          <div>
              {this.state.loading ? this.renderLoaderPage() : this.renderFeedPage()}
        </div>
         )
    }
}
 
export default FeedPage;