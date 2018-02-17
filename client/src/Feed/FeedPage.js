import React, { Component } from 'react';
import { Grid, Container, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import FeedIdentity from './Components/FeedIdentity';
import ShareBox from './Components/ShareBox';

class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        	first_name: "Alexander",
            last_name: "Walz",
            image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAA7hAAAAJDE2YzA2NDBkLWU0YzMtNDE2Zi1hMDcxLTY0YWFiNWZlZjM5ZQ.jpg",
            job_title: "Full Stack Developer"
         }
    }
    render() { 
        return ( 
 			<div style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/greyzz.png')", backgroundPositionX: 'center', color:"grey", paddingTop: 80}}>
 				 
 				 	
 				 	<Container>
 				 	<Grid>
 				 	<Grid.Row>
 				 		 <Grid.Column width={4}>
 							<FeedIdentity first_name={this.state.first_name} last_name={this.state.last_name}
                             job_title={this.state.job_title} image_url={this.state.image_url}/>
 						</Grid.Column>
 						<Grid.Column width={8}>
 							<ShareBox />
 						</Grid.Column>
 						<Grid.Column width={4}>
 							
 						</Grid.Column>
 					</Grid.Row>
 					</Grid>
 					</Container>

 					
 			
 			</div>
          
         )
    }
}
 
export default FeedPage;