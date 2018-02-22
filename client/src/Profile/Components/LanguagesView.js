import React, { Component } from 'react'
import Languages from './Languages'
import { Message, Grid, Segment, Divider , Icon, Modal, Button, Image, Header, Container, Form, Loader} from 'semantic-ui-react'
import DragSortableList from 'react-drag-sortable'


let languageStyles={
  border: "2px solid grey",
  borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
  borderImageSlice: "1",
  backgroundColor: "transparent"
}

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
    
          <Segment >
              <Grid.Row style={{marginBottom: "10px"}}>
              <Icon name='cancel' size='small' onClick={()=> this.cancel()} />
              
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>
                <Form>
                  <Form.Input fluid placeholder="Add another language"/>
                  <Button icon='check' size="large" circular color='teal'/>
                  <Icon name='close' size='large' circular onClick={()=> this.save()} />
                </Form>

                <Header textAlign="center" style={{color:"grey"}}>Drag and Drop to reorder your languages</Header>
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
            <Segment  style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
              <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>My Languages</h3></Divider>
  
              <Loader active inline='centered' size="big" inverted style={{marginTop: "5%"}}/>
  
            </Segment>
        </Container>
      </div>
        )
      }

      return(
        <div>
    
          <Segment  style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
              <Grid.Row style={{marginBottom: "10px", marginBottom: "10px"}}>

                <Icon name='pencil' size='small' onClick={()=> this.edit()} />
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>

                      {this.props.limit5.map((language, key) => (
                        <Languages language={language} key={key} />
                      ))}
              <p onClick={()=>this.removeLimit()} style={{cursor: "pointer", color: "white", marginTop: "5px"}}>View All Languages</p>
          </Segment>
          
        </div>
      )
    }

    renderNoLimit(){
      return(
        <div>
    
          <Segment  style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')"}}>
              <Grid.Row style={{marginBottom: "10px"}}>

                <Icon name='pencil' size='small' onClick={()=> this.edit()} />
                <Grid.Column textAlign="center">
                <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>My Languages</h3></Divider>
                </Grid.Column>
              </Grid.Row>

                      {this.props.languages.map(language => (
                        <Languages language={language} />
                      ))}
              <p onClick={()=>this.limit()}  style={{cursor: "pointer", color: "white", marginTop: "5px"}}>Hide</p>
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