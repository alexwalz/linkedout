import React from 'react'
import { Comment, Icon, Message } from 'semantic-ui-react'

const Article = (props) => (

  <div style={{marginTop:"10px"}}>
  <Message>
      <Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src={props.article.urlToImage} />
          <Comment.Content>
            <Comment.Author><a href={props.article.url} target='_blank'>{props.article.title}</a></Comment.Author>
            <Comment.Metadata>
              <div>{props.article.publishedAt}</div>
              <div>
                <Icon name='star' />
                {props.article.source.name}
              </div>
            </Comment.Metadata>
            <Comment.Text>
              {props.article.description}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      </Message>
  </div>

)

export default Article