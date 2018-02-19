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
      console.log(loading)
      
      if(loading) { 
        return (
          <div>
          <Container>
            <Segment  style={{backgroundColor: "transparent"}}>
              <Divider horizontal><h3  textAlign="center" style={{color: "white"}}>News Feed</h3></Divider>
  
                  <Loader active inline='centered' />
  
            </Segment>
        </Container>
      </div>
        )
      }
      
      return (
        <div>
        <Container style={{marginBottom: "10px"}} >
          <Segment  style={{backgroundColor: "transparent"}}>
            <Divider horizontal><h3  textAlign="center" style={{color: "grey"}}>News Feed</h3></Divider>
  
                        {this.state.articles.slice(0, 5).map(article => (
                            <Article article={article} style={{marginTop:"10px"}}/>
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