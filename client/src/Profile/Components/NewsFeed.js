import React, { Component } from 'react';
import { Segment, Divider, Container, Loader } from 'semantic-ui-react'
import axios from 'axios';
import Article from './Article'

class NewsArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [],
            loading: true
         }
    }



    componentDidMount(){
            axios.get('https://newsapi.org/v2/everything?q=developers&sortBy=publishedAt&apiKey=bc369628b86c49f298e31af73acbba7a')
        .then(response => {
            this.setState({ articles: response.data.articles });
            setTimeout(() => this.setState({ loading: false }), 1500); 
            
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    render(props) {
      const loading  = this.state.loading;
      if(loading) { 
        return (
          <div>
          <Container>
            <Segment  style={{backgroundColor: "transparent"}} textAlign="center">
              <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>News Feed</h3></Divider>
  
              <h2 style={{color: "white"}} textAlign="center">Loading News Posts</h2>
              <Loader active inline='centered' size="big" inverted style={{marginTop: "12%"}}/>
              
            </Segment>
        </Container>
      </div>
        )
      }
      
      return (
        <div>
        <Container style={{marginBottom: "10px"}} >
          <Segment  style={{backgroundColor: "transparent"}}>
  
                        {this.state.articles.slice(0, 5).map((article, key) => (
                            <Article article={article} key={key} style={{marginTop:"10px"}}/>
                          ))}
                          <br/>
                          <p textAlign="center" style={{color:"grey"}}>Powered by NewsAPI.org</p>
              

          </Segment>
      </Container>
    </div>
      ); 
    }
  }
  
  export default NewsArticles