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
      <Header as='h3' icon textAlign='center'>
        <Icon name='warning sign' color="grey" circular />
        <Header.Content style={{color: "#5CC1CD"}}>
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
                <h3  textAlign="center" style={{color: "#5CC1CD"}}>Loading My Projects...</h3>

      </Container>
    </div>
      )
    }
    
    return (
      <div>
      <Container>
        {console.log(this.props.userInfo)}

        {this.props.userInfo.projects.length > 0 ? this.props.userInfo.projects.slice(0).reverse().map((project, key) => (
          <ProjectPosts
              project_name={project.project_name}
              development_position={project.development_position}
              code_url={project.code_url}
              project_url={project.project_url}
              project_description={project.project_description}
              languages={project.languages} 
              loggedInUserInfo={this.props.loggedInUserInfo}
              url={this.props.url}
              />
              
      ))
        
        : this.renderError()}

    </Container>
  </div>
    ); 
  }
}

export default ProfileFeed