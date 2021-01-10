import React, { Component } from 'react';
import PostList from "./PostList.js";
import AuthorInfo from "./AuthorInfo.js";
import { Grid } from "semantic-ui-react";
class Blog extends Component {
  state = {
    selectedAuthorId: null,
  };
  onSelectPost = post => {
    console.log(post);
    this.setState({ selectedAuthorId: post.userId })
  };
    render() {
      const {selectedAuthorId} = this.state;
        return (
        <Grid>
          <Grid.Column width={8}>
            <PostList onPostClick={this.onSelectPost} />
          </Grid.Column>
          <Grid.Column width={6}>
            <AuthorInfo authorId={selectedAuthorId} />
          </Grid.Column>
        </Grid>
        )
    }
}

export default Blog;