import React, { Component } from "react";
import Parallax from "react-springy-parallax";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Languages from "./Components/Languages";
import {
  Grid,
  Container,
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import ConnectButton from "./Components/ConnectButton";
import EmailButton from "./Components/EmailButton";
import ProfileFeed from "./Components/ProfileFeed";
import LanguagesView from "./Components/LanguagesView";
import Bio from "./Components/Bio";
import ShareBox from "../Feed/Components/ShareBox";
import Connections from "./Components/Connections";
import Newsfeed from "./Components/NewsFeed";
import background from "../img/midnight.jpg";
import axios from "axios";
import { Redirect } from "react-router-dom";
import SecondaryModal from "../Login/Components/SecondaryLoginModal";
import ProjectShareBox from './Components/ProjectShareBox'
import ProjectsView from './Components/ProjectsView'
import './Components/css/profile.css'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.renderUser = this.renderUser.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      update: false,
      loggedInUser: {},
      renderedUser: {
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
        languages: [],
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

    axios
      .get("/api/users/" + this.props.match.params.id)
      .then(response => {
        if (this.state.renderedUser !== response.data) {
          this.setState({ renderedUser: response.data });
          this.setState({ url: this.props.match.params.id });
        } else {
          // console.log("Information already up to date");
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });

  }

  componentDidUpdate(prevProps, prevState) {
    axios
      .get("/api/users/" + this.props.match.params.id)
      .then(response => {
        if (
          JSON.stringify(response.data) !==
          JSON.stringify(this.state.renderedUser)
        ) {
          this.setState({ renderedUser: response.data });
          this.setState({ url: this.props.match.params.id });
          this.setState({update: false})
        } else {

        }
        
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  renderUser = () => {
    axios
      .get("/api/users/" + this.props.match.params.id)
      .then(response => {
        if (this.state.renderedUser !== response.data) {
          this.setState({ renderedUser: response.data });
          this.setState({ url: this.props.match.params.id });
        } else {
          // console.log("Information already up to date");
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  getLoggedInUser = () => {
    axios
      .get("/api/users/login")
      .then(response => {
        this.setState({ loggedInUser: response.data });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPositionX: "center",
          color: "grey"
        }}
      >
        {this.state.loggedInUser.loggedIn ? null : <SecondaryModal />}

        <Container style={{ paddingTop: 62 }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Banner
                  userInfo={this.state.renderedUser}
                  loggedInUserInfo={this.state.loggedInUser}
                  url={this.state.url}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <Divider horizontal>
                  <h3 textAlign="center" style={{ color: "white" }}>
                  <Icon circular name='user' />My Bio
                  </h3>
                </Divider>
                <Bio
                  userInfo={this.state.renderedUser}
                  loggedInUserInfo={this.state.loggedInUser}
                  url={this.state.url}
                  renderUser={this.renderUser}
                />
              </Grid.Column>

              <Grid.Column width={6}>
                <Divider horizontal>
                  <h3 textAlign="center" style={{ color: "white" }}>
                  <Icon circular name='id card' />About Me
                  </h3>
                </Divider>
                <About
                  userInfo={this.state.renderedUser}
                  loggedInUserInfo={this.state.loggedInUser}
                  url={this.state.url}
                  renderUser={this.renderUser}
                />
              </Grid.Column>


               <Grid.Column width={4}>
                    <Divider horizontal>
                      <h3 textAlign="center" style={{ color: "white" }}>
                      <Icon circular name='code' />Languages
                      </h3>
                    </Divider>

                    <LanguagesView
                      userInfo={this.state.renderedUser}
                      loggedInUserInfo={this.state.loggedInUser}
                      url={this.state.url}
                      renderUser={this.renderUser}
                    />
                  </Grid.Column>



              <Grid.Column width={16} style={{ marginTop: "10px" }}>
                <Divider horizontal>
                  <h3 textAlign="center" style={{ color: "white" }}>
                  <Icon circular name='sitemap' />My Connections
                  </h3>
                </Divider>

                <Grid.Row>
                  <Connections
                    userInfo={this.state.renderedUser}
                    loggedInUserInfo={this.state.loggedInUser}
                    url={this.state.url}
                  />
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Grid.Row>
                  {/* <Link to="/home/profile/5a91a842c09c7b377882e41c">ALEX </Link>
                                            <Link to="/home/profile/5a91a842c09c7b377882e41d"> KURT</Link> */}


                  <Grid.Column width={16} style={{ marginTop: "10px" }}>
                         <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>My Projects</h3></Divider>
                  
                         {this.state.loggedInUser.userId ===
                      this.props.match.params.id &&
                    this.state.loggedInUser.loggedIn ? (
                      <ProjectShareBox loggedInUser={this.state.loggedInUser.userData} renderUser={this.renderUser}/>
                    ) : null}

                  </Grid.Column>

                  <Grid.Column width={16} style={{marginTop:"4%"}}>
                    <ProjectsView
                      userInfo={this.state.renderedUser}
                      loggedInUserInfo={this.state.loggedInUser}
                      url={this.state.url}
                    />
                  </Grid.Column>


                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={8}>
                <Grid.Row>
                  <Grid.Column width={16} style={{ marginBottom: "10px"}}>
                  <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>News Feed</h3></Divider>
                    {this.state.loggedInUser.userId ===
                      this.props.match.params.id &&
                    this.state.loggedInUser.loggedIn ? (
                      <ShareBox loggedInUser={this.state.loggedInUser.userData} renderUser={this.renderUser}/>
                    ) : null}
                  </Grid.Column>

                  <Grid.Column width={16} style={{marginTop:"4%"}}>
                    <ProfileFeed
                      userInfo={this.state.renderedUser}
                      loggedInUserInfo={this.state.loggedInUser}
                      url={this.state.url}
                      updateParent = {this.update}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default ProfilePage;
