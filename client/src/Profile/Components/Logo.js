import React from 'react';
import { Divider, Grid } from 'semantic-ui-react'

let styles={
    color: "White",
    margin: "1px"
}

const Logo = () => 


<Grid columns={1} divided style={styles}>
    <Grid.Row>
      <Grid.Column>
      <h1 style={{textAlign: "center", fontSize: "1rem"}}>DevSpot</h1>
      </Grid.Column>

    </Grid.Row>

  </Grid>


 export default Logo;