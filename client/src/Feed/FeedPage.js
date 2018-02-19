import React, { Component } from 'react';
import { Grid, Container, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import FeedIdentity from './Components/FeedIdentity';
import ShareBox from './Components/ShareBox';
import FeedContainer from './Components/FeedContainer';
import NewsFeed from '../Profile/Components/NewsFeed'
import background from '../img/midnight.jpg'

class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        	first_name: "John",
            last_name: "Doe",
            image_url: "https://pbs.twimg.com/profile_images/543459641263665152/9-Y39lzm.jpeg",
            job_title: "Full Stack Developer",
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
            ]
         }
    }

    componentDidMount(){
        this.getPosts();
    }

    //function to obtain posts for the feed
    getPosts(){
        //API route to obtain all posts
    }


    render() { 
        return ( 
 			<div style={{backgroundImage: `url(${background})`, backgroundPositionX: 'center', color:"grey", paddingTop: 80, paddingLeft: "2%", paddingRight: "2%"}}>
 				 
 				 	
 				 	<Grid>
 				 	<Grid.Row>

                      <Grid.Column width={3}>
                      <FeedIdentity  style={{position: "fixed"}} first_name={this.state.first_name} last_name={this.state.last_name}
                                        job_title={this.state.job_title} image_url={this.state.image_url} connections={this.state.connections.length}/>
 						</Grid.Column>

 						<Grid.Column width={7}>


                             
                                        <ShareBox
                                        first_name={this.state.first_name} last_name={this.state.last_name}
                                        job_title={this.state.job_title} image_url={this.state.image_url} />
                      

 							<FeedContainer 
 							first_name={this.state.first_name} last_name={this.state.last_name}
                             job_title={this.state.job_title} image_url={this.state.image_url}
 							/>
 						</Grid.Column>
 						<Grid.Column width={6}>
 							<NewsFeed/>
 						</Grid.Column>
 					</Grid.Row>
 					</Grid>

 					
 			
 			</div>
          
         )
    }
}
 
export default FeedPage;