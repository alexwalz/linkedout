import React, { Component } from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider , Icon, Modal, Button, Image, Header, Container, Form, Loader} from 'semantic-ui-react'
import DragSortableList from 'react-drag-sortable'


class LanguagesView extends Component {

  constructor(props) {
        super(props);
        this.state = { 
          editing: false,
          limit: true,
          loading: true
         }
    }

    edit(){
      this.setState({editing: true})
    }

    cancel(){
      this.setState({editing: false})
      this.setState({limit: true})
    }

    save(){
      this.setState({editing: false})
      this.setState({limit: true})
      //api route to save new array of languages
    }

    removeLimit(){
      this.setState({limit: false})
    }

    limit(){
      this.setState({limit: true})
    }

    componentDidMount(){
      setTimeout(() => this.setState({ loading: false }), 1500); 
    }

    renderForm(){
      return(
          <div>
    
          <Segment>
              <Grid.Row style={{marginBottom: "10px"}}>
              <Icon name='cancel' size='small' onClick={()=> this.cancel()} />
              
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>
                <Form>
                  <Form.Input fluid placeholder="Add another language"/>
                  <Button icon='add' size="large" circular color='teal'/>
                  <Icon name='save' size='large' circular onClick={()=> this.save()} />
                </Form>

                <Header>Drag and Drop to reorder your languages</Header>
                <DragSortableList items={this.props.languagesDrag} dropBackTransitionDuration={0.3} type="vertical"/>
          </Segment>
        </div>
        )
    }

    renderDisplay(){
      return(
          <Container>
            {(this.state.limit) ? this.renderLimit() : this.renderNoLimit()}
            </Container>
        )
    }

    renderLimit(){
      const loading  = this.state.loading;

       if(loading) { 
        return (
          <div>
          <Container>
            <Segment>
              <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
  
                  <Loader active inline='centered' />
  
            </Segment>
        </Container>
      </div>
        )
      }

      return(
        <div>
    
          <Segment>
              <Grid.Row style={{marginBottom: "10px"}}>

                <Icon name='pencil' size='small' onClick={()=> this.edit()} />
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>

                      {this.props.limit5.map(language => (
                        <Languages language={language} />
                      ))}
            <Segment>
              <Button onClick={()=>this.removeLimit()}>View All Languages</Button>
            </Segment>
          </Segment>
          
        </div>
      )
    }

    renderNoLimit(){
      return(
        <div>
    
          <Segment>
              <Grid.Row style={{marginBottom: "10px"}}>

                <Icon name='pencil' size='small' onClick={()=> this.edit()} />
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>

                      {this.props.languages.map(language => (
                        <Languages language={language} />
                      ))}
              <Segment>
              <Button onClick={()=>this.limit()}>Hide</Button>
            </Segment>
          </Segment>
        </div>
      )
    }

  render() { 
    return(
    <Container>
    {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
    </Container>)
  }
}

export default LanguagesView;