import React from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider, Header, Icon, Image } from 'semantic-ui-react'


const Bio = (props) => (
  <div style={{marginBottom:"10px"}}>
    
    <Segment>
      {console.log("LANGUAGES", props.languages)}

        <Grid.Row style={{marginBottom: "10px"}}>
          <Grid.Column textAlign="center">
          <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Bio</h3></Divider>
          </Grid.Column>
        </Grid.Row>

    <Header as='h2' icon textAlign='center'>
      <Icon name='user' circular />
      <Header.Content>
        {props.first_name + " " + props.last_name}
      </Header.Content>
    </Header>

    <Grid>
        <Grid.Row columns={2}>
        <Grid.Column width={2}>
            <Icon circular color='teal' name='mail outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4>{props.email}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='teal' name='phone outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4>{props.phone}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
            <Icon circular color='teal' name='building outline' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4>{props.company} | {props.jobTitle}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='teal' name='calendar' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4>{props.birthday}</h4>
        </Grid.Column>

        <Grid.Column width={2} style={{marginTop: "3px"}}>
        <Icon circular color='teal' name='map pin' />
        </Grid.Column>
        <Grid.Column width={14} textAlign="left">
            <h4>{props.location}</h4>
        </Grid.Column>


        </Grid.Row>

    </Grid>
        
    </Segment>
  </div>
)

export default Bio;