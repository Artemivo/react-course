import React from 'react'
import { Container } from 'semantic-ui-react'
import CommentsImg from '../components/CommentsImg'
import CommentsList from '../components/CommentsList'

function Comments() {
    return (
        <Container>
            <CommentsImg />
            <CommentsList />

        </Container>
    )
}

export default Comments
