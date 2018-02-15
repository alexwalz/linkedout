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
        
         )
    }
}
 
export default ProfilePage;