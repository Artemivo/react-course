import React, { Component } from 'react';
import { Card, Icon, Image, List, Feed } from "semantic-ui-react";
import LoadingOverlay from "./LoadingOverlay";

class AuthorInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            author : null,
            albums:[],
            loading : false,
            error : '',
            areAlbumsDisplayed: false
        }
    }

    componentDidMount(){
        const {authorId} = this.props;
        if(authorId){
            this.fetchAuthor(authorId);
            this.fetchAlbums(authorId);
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.authorId !== this.props.authorId && this.props.authorId) {
            this.fetchAuthor(this.props.authorId);
            this.fetchAlbums(this.props.authorId)
          }
    }

    fetchAuthor(authorId){
        this.setState({loading:true});
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
            .then(response => response.json())
            .then(data => this.setState({author: data, loading: false}))
            .catch(e => this.setState({error: e.message , loading: false, author: null}))
    }

    fetchAlbums(authorId) {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
          .then(response => response.json())
          .then(albums => this.setState({ albums, loading: false }))
          .catch(e => this.setState({ loading: false }))
      }
    render() {
        const {error, author , albums, loading, areAlbumsDisplayed} = this.state;
        
        
        return (
            <div className='author-fixed'>
        <div className='error'>{error}</div>
        <LoadingOverlay active={loading} />
        {author &&
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{author.name}</Card.Header>
            <Card.Meta>nick-name : <b>{author.username}</b></Card.Meta>
            <Card.Description>
              {author.address.city}, {author.address.street} {author.address.zipcode}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a onClick={() => this.setState({ areAlbumsDisplayed: !areAlbumsDisplayed })}>
              <Icon name='camera'/>
              {albums.length} Albums : {areAlbumsDisplayed ? 'Hide Albums' : 'Show Albums'}
            </a>
            {areAlbumsDisplayed && 
            <List>
              {albums.map(album => <List.Item><a>{album.title}</a></List.Item> )}
            </List> }
          </Card.Content>
        </Card>
        }
      </div>
        )
    }
}

export default AuthorInfo;
