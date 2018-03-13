import React from 'react'
import { Comment, Icon, Message } from 'semantic-ui-react'

let articleStyles={
  border: "2px solid grey",
  backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/always_grey.png')",
}

const Article = (props) => (

  <div style={{marginTop:"10px"}}>
  <Message style={articleStyles}>
      <Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src={props.article.urlToImage} />
          <Comment.Content>
            <Comment.Author><a href={props.article.url} target='_blank'>{props.article.title}</a></Comment.Author>
            <Comment.Metadata>
              <div style={{color: "#67C8D3"}}>{props.article.publishedAt}</div>
              <div style={{color: "#67C8D3"}}>
                <Icon name='star'  />
                {props.article.source.name}
              </div>
            </Comment.Metadata>
            <Comment.Text style={{color: "white"}}>
              {props.article.description}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      </Message>
  </div>

)

export default Article