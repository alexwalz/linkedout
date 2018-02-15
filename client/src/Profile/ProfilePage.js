import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Banner from './Components/Banner'
import About from './Components/About'
import { Grid } from 'semantic-ui-react'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

        <div>
                <Grid>
                <Grid.Row>
                <Grid.Column width={16}>
                    <Banner/>
                </Grid.Column>
                </Grid.Row>
            
                <Grid.Row>
                <Grid.Column width={8}>
                    <About/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <About/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
          </div>
          
        //     <Parallax ref='parallax' pages={1}>

            
        //     {/* Mobile  */}
        //     <Parallax.Layer offset={0} speed={0} style={{ backgroundImage: `url(${'https://hookagency.com/wp-content/uploads/2015/11/black-chrome-gradient-ui-gradient-background.jpg'})`, backgroundSize: 'cover' }} />
        //     <Parallax.Layer
        //     offset={0}
        //     speed={0}
        //     >

        //     {/* stuff for First page */}
        //     <Parallax.Layer
        //         offset={0}
        //         speed={0.5}
        //         style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
        //         >
            
        //     <Banner/>

        //     </Parallax.Layer>

        //     <Parallax.Layer
        //         offset={0.0}
        //         speed={0.7}
        //         style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
        //         >
        //         <About/>
        //     </Parallax.Layer>

        //     </Parallax.Layer>
        // </Parallax>
         )
    }
}
 
export default ProfilePage;