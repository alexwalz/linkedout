import React from 'react'
import Languages from './Languages'
import { Message, Grid, Segment } from 'semantic-ui-react'

const LanguagesView = (props) => (
  <div>
    
    <Segment>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h2  textAlign="center" >My Languages</h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop: "10px"}}>
            <Grid.Column width={8}>
               <Languages language="React.js"/>
            </Grid.Column>
            <Grid.Column width={8}>
               <Languages language="Node.js"/>
            </Grid.Column>
            <Grid.Column width={8}>
               <Languages language="MongoDb"/>
            </Grid.Column>
            <Grid.Column width={8}>
               <Languages language="Handlebars"/>
            </Grid.Column>
            <Grid.Column width={8}>
               <Languages language="MySql"/>
            </Grid.Column>
        </Grid.Row>


    </Segment>
  </div>
)

export default LanguagesView;