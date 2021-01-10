import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";
import Comments from "./Comments";

class PostItem extends Component {
  state = {
    areCommentsDisplayed: false
  };

    render() {
        const {post, onClick} = this.props;
        const { areCommentsDisplayed } = this.state;

        return (
           <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary onClick={onClick}>
              <Feed.User>{post.title}</Feed.User>
            </Feed.Summary>
            <Feed.Extra   className='post-title'>
              {post.body}
            </Feed.Extra>
            <Feed.Extra>
              <a
                onClick={() => this.setState({ areCommentsDisplayed: !areCommentsDisplayed })}>
                {areCommentsDisplayed ? 'Hide Comments' : 'Show Comments'}
              </a>
            </Feed.Extra>
            <Feed.Extra>
              {areCommentsDisplayed && <Comments postId={post.id} /> }
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
        )
    }
}

export default PostItem;