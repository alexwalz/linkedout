import React from 'react';
import { Divider, Grid } from 'semantic-ui-react'

let styles={
    color: "white",
    marginLeft: "3%"
}

const Logo = () => 


<Grid columns={2} divided style={styles}>
    <Grid.Row>

      <Grid.Column width={8}>
      </Grid.Column>

      <Grid.Column width={8}>
      <h1 style={{textAlign: "center", fontSize: "9rem"}}>DevSpot</h1>
        <Divider horizontal style={{color: "white"}}>Social Media For Developers</Divider>
      </Grid.Column>

    </Grid.Row>

  </Grid>


 export default Logo;