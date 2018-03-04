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
            <Comment.Group collapsed={commentsCollapsed}>
                <IndividualComments userInfo={this.props.userInfo} message="This is a first Comment"/>
            </Comment.Group>

            <Comment.Group collapsed={commentsCollapsed}>
                <IndividualComments userInfo={this.props.userInfo} message="This is a second Comment"/>
            </Comment.Group>

            <Comment.Group collapsed={commentsCollapsed}>
                <IndividualComments userInfo={this.props.userInfo} message="This is a third Comment"/>
            </Comment.Group>

            <Comment.Group collapsed={commentsCollapsed}>
            <PostReplyBox userInfo={this.props.userInfo} LoggedInUserInfo={this.props.LoggedInUserInfo}/>
            </Comment.Group>

          </Comment>
        </Comment.Group>
      </div>
    )
  }
}