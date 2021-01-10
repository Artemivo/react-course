import React, { Component } from 'react';
import { Comment } from "semantic-ui-react";
import LoadingOverlay from "./LoadingOverlay";

class Comments extends Component {
  state = {
    loading: false,
    comments: []
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
      .then(response => response.json())
      .then(comments => {
        this.setState({
          loading: false,
          comments
        })
      }).catch(() => this.setState({ loading: false }))
  }

  render() {
    const { comments } = this.state;
    return (
      <Comment.Group className='comments'>
        <LoadingOverlay active={this.state.loading} />
        {comments.length > 0 && comments.map(comment => (
          <Comment>
            <Comment.Content>
              <Comment.Author as='a'>{comment.email}</Comment.Author>
              <Comment.Text>{comment.name}</Comment.Text>
              <Comment.Text>{comment.body}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    );
  }
}

export default Comments;
