import React, { Component } from 'react'
import { Header, Segment, Container, Divider, Icon } from 'semantic-ui-react'
import ProfileFeedPosts from '../../Profile/Components/ProfileFeedPosts'
import axios from 'axios'

class  ProfileFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[]
         }
    }

    componentDidMount(){
        axios
        .get("/api/users/posts")
        .then(response => {
          this.setState({posts: response.data.data});
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    }

    render(props) { 
        return ( 
            <div style={{marginTop: 40}}>
            <Divider horizontal><h3 textAlign="center" style={{ color: "white" }}><Icon circular name='share alternate' />Posts Feed</h3></Divider>

                          {this.state.posts.slice(0).reverse().map((post, key) => (
                            <ProfileFeedPosts key={key} messageType= {post.messageType} name={post.firstName + " " + post.lastName} image_url={post.image_url} message ={post.message} userId={post.userId} userInfo={this.props.loggedInUser} />
                          ))}

    </div>
         )
    }
}
 
export default ProfileFeed
