import React from 'react';
import { Segment, Image, Grid, Header, Icon, Button, Label, Divider} from 'semantic-ui-react'
import ConnectButton from './ConnectButton'

let styles={
  top: "0",
  left: "0",
  width: "128%",
  height: "30vh!important",
  //position: "fixed",
  backgroundImage: `url('https://bizsitenow-wpengine.netdna-ssl.com/wp-content/blogs.dir/28/files/2014/10/418_Las-Vegas-Web-Developer_201410141.jpg')`,
  backgroundSize: "cover",
  margin: "0 0 0 -14%",
  WebkitMaskImage:"-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",

  
}

let imageStyles={
    height: "25vh",
    width: "25vh",
    marginLeft: "5%",
    padding: "6px",
    border: "1px solid grey", 
    backgroundColor: "white",
}



const Logo = (props) => 

        <div>
                <Segment padded='very' style={styles}>

                  <Grid columns={4} >
                        <Grid.Row>

                        <Grid.Column width={3} textAlign="right">
                        </Grid.Column>

                        <Grid.Column width={3} textAlign="right">
                             <Image  style={imageStyles} src={props.image_url} size='medium' circular />
                        </Grid.Column>

                        <Grid.Column width={7}>
                            
                            <Header as='h1' style={{marginTop: "5vh", color: "white", fontSize: "7vh"}}>
                                <Icon name='code' />
                                <Header.Content>
                                    {props.firstName + " " + props.lastName}
                                <Header.Subheader style={{color: "white"}}>
                                     <Divider horizontal  inverted >{props.job_title}</Divider>
                                </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>

                        <Grid.Column width={3}>

                        </Grid.Column>

                        </Grid.Row>

                    </Grid>

                    
                
                </Segment>
        </div>
;


 export default Logo;