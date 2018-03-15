import React from 'react';
import { Segment, Image, Grid, Header, Icon, Button, Label, Divider} from 'semantic-ui-react'
import ConnectButton from './ConnectButton'
import EmailButton from './EmailButton'

let styles={
  top: "0",
  left: "0",
  width: "128%",
  height: "30vh!important",
  //position: "fixed",
  backgroundImage: `url('https://bizsitenow-wpengine.netdna-ssl.com/wp-content/blogs.dir/28/files/2014/10/418_Las-Vegas-Web-Developer_201410141.jpg')`,
  backgroundSize: "cover",
  margin: "0 0 0 -14%",
  WebkitMaskImage:"-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.05)))",

  
}

let imageStyles={
    maxHeight: "150px",
    minHeight: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    overflow: "hidden",
    padding: "3px",
    border: "3px solid #5CC1CD", 
    backgroundColor: "white",
    imageOrientation:"from-image"
}



const Logo = (props) => 

        <div style={{marginTop: "5%"}}>
                <Segment padded='very' style={{backgroundColor: "transparent", border: "none"}}>
                  <Grid columns={4} >
                        <Grid.Row>
                        <Grid.Column width={1} textAlign="right">
                        </Grid.Column>
                        <Grid.Column width={3} textAlign="right">
                             <Image  style={imageStyles} src={props.userInfo.image_url} size='medium' circular />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Header textAlign="center" as='h1' style={{marginTop: "5vh", color: "#5CC1CD", fontSize: "7vh"}}>
                                <Header.Content>
                                    {props.userInfo.firstName + " " + props.userInfo.lastName}
                                <Header.Subheader style={{color: "grey"}}>
                                     <Divider horizontal style={{color: "grey"}} >{props.userInfo.job_title}</Divider>
                                </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={2}>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>





                    {/* <Header as='h2' icon textAlign='center'>
                        <Image style={imageStyles} src={props.userInfo.image_url} size='medium' circular />
                        <Header.Content>
                            {props.userInfo.firstName + " " + props.userInfo.lastName}
                        </Header.Content>
                        </Header>
                        <Divider horizontal  inverted >{props.userInfo.job_title}</Divider> */}



                        
        </div>
;


 export default Logo;