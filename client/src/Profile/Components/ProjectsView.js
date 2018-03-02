import React, {Component} from 'react'
import { Header, Segment, Container, Divider, Loader, Icon } from 'semantic-ui-react'
import ProjectPosts from './ProjectPosts'
import ProjectShareBox from './ProjectShareBox'

class ProfileFeed extends React.Component {
  
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({loading: true})

  }

  componentDidUpdate(){
    setTimeout(() => this.setState({ loading: false }), 2000); // simulates an async action, and hides the spinner
  }

  renderError(){
    return(
    
      <div style={{marginTop: "7%"}}>
      <Header as='h2' icon textAlign='center'>
        <Icon name='warning sign' color="grey" circular />
        <Header.Content style={{color: "white"}}>
          No Projects Added For This User
        </Header.Content>
      </Header>
    </div>

    )
  }

  renderDisplay(){

}
  render(props) {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div>
        <Container style={{textAlign: "center"}}>
           
                <Loader active inline='centered' size="big" inverted style={{marginTop: "12%"}}/>
                <h1  textAlign="center" style={{color: "white"}}>Loading My Projects...</h1>

      </Container>
    </div>
      )
    }
    
    return (
      <div>
      <Container>

        {/* {this.props.userInfo.projects.length > 0 ? this.props.userInfo.projects.slice(0).reverse().map((project, key) => (
          <ProjectPosts 
              project_name={project.project_name}
              development_position={project.development_position}
              code_url={project.project_name}
              project_url={project.project_name}
              project_description={project.project_name}
              languages={project.languages} />
      ))
        
        
        : this.renderError()} */}

      <ProjectPosts 
              project_name="Test Project"
              development_position="Front End Developer"
              code_url="https://github.com/alexwalz/linkedout"
              project_url="https://devspot1.herokuapp.com/"
              project_description="Created a brand new social media website for developers only.  This way it's easier to connect with others in the same field and recruit other developers"
              languages="React, Node, Express, MongoDb" />
      ))


    </Container>
  </div>
    ); 
  }
}

export default ProfileFeed