import React from 'react';
import { Segment, Image, Grid, Header, Icon, Button, Label, Divider} from 'semantic-ui-react'
import ConnectButton from './ConnectButton'

let styles={
  top: "0",
  left: "0",
  width: "100%",
  height: "30vh!important",
  //position: "fixed",
  backgroundImage: `url('https://bizsitenow-wpengine.netdna-ssl.com/wp-content/blogs.dir/28/files/2014/10/418_Las-Vegas-Web-Developer_201410141.jpg')`,
  backgroundSize: "cover",
  
}

let imageStyles={
    border: "4px solid grey",
    height: "25vh",
    width: "25vh",
}


const Logo = (props) => 

        <div>
                <Segment padded='very' style={styles}>

                  <Grid columns={3} >
                        <Grid.Row>

                        <Grid.Column width={4} textAlign="right">
                             <Image  style={imageStyles} src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAA7hAAAAJDE2YzA2NDBkLWU0YzMtNDE2Zi1hMDcxLTY0YWFiNWZlZjM5ZQ.jpg' size='medium' circular />
                        </Grid.Column>

                        <Grid.Column width={9}>
                            
                            <Header as='h1' style={{marginTop: "5vh", color: "white", fontSize: "7vh"}}>
                                <Icon name='code' />
                                <Header.Content>
                                    Alexander Walz
                                <Header.Subheader style={{color: "white"}}>
                                     <Divider horizontal  inverted >Full Stack Web Developer</Divider>
                                </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>

                        <Grid.Column width={3}>

                            <ConnectButton/>

                        </Grid.Column>

                        </Grid.Row>

                    </Grid>

                    
                
                </Segment>
        </div>
;


 export default Logo;