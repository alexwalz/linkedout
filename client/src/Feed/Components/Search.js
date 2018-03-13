import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import axios from 'axios'

export default class SearchContainer extends Component {

  constructor() {
    super();
    this.state = {
      source: []
    }
  }

  getUsers() {
    axios.get('/api/users')
    .then((res) =>{
      console.log("RESPONSE :",res.data)
      for(var i = 0; i < res.data.length; i++){
        let person = {}
        person.id = res.data[i]._id
        person.title = res.data[i].firstName + " " + res.data[i].lastName;
        person.description = res.data[i].job_title;
        person.image = res.data[i].image_url;

        this.state.source.push(person)
      }
    })
  }


  componentWillMount() {
    this.resetComponent()
    this.getUsers();
  }

  conponentDidMount(){

  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

   setTimeout(() => {
      const re = new RegExp(this.state.value, 'i');
      const isMatch = result => re.test(result.title);

      const results = this.state.source.filter(isMatch).map(result => ({ ...result, key: result.id }));

      this.setState({
        isLoading: false,
        results: results,
      });
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}