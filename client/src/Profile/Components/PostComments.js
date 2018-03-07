import React, { Component } from 'react'
import { Checkbox, Comment, Button, Form, TextArea } from 'semantic-ui-react'
import IndividualComments from './IndividualComments'
import PostReplyBox from './PostReplyBox'

export default class CommentExamplecommentsCollapsed extends Component {
  state = { commentsCollapsed: true }


  showComments = () => (
      this.state.commentsCollapsed ? this.setState({commentsCollapsed: false}) : this.setState({commentsCollapsed: true})
  )

  render(props) {
    const { commentsCollapsed } = this.state


    return (
      <div>
        <Button circular color="grey" icon='comments' onClick={this.showComments}/>

        <Comment.Group>
          <Comment>


        {this.props.comments.slice(0).reverse().map((comment, key) => (
                    <Comment.Group collapsed={commentsCollapsed}>
                      <IndividualComments userInfo={this.props.userInfo} message={comment}/>
                  </Comment.Group>
      ))}



            

            <Comment.Group collapsed={commentsCollapsed}>
                <PostReplyBox postId={this.props.postId} updateParent={this.props.updateParent}/>
            </Comment.Group>

          </Comment>
        </Comment.Group>
      </div>
    )
  }
}