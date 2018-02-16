import React from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider } from 'semantic-ui-react'

const LanguagesView = (props) => (
  <div>
    
    <Segment>
      {console.log("LANGUAGES", props.languages)}

        <Grid.Row style={{marginBottom: "10px"}}>
          <Grid.Column textAlign="center">
          <Divider horizontal><h4  textAlign="center" style={{color: "grey"}}>My Languages</h4></Divider>
          </Grid.Column>
        </Grid.Row>

                {props.languages.map(language => (
                  <Languages language={language} />
                ))}

    </Segment>
  </div>
)

export default LanguagesView;