import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import apiClient from '../server/api/API'
import { fetchAddComment } from "../redux/actions/actions";



function CommentsList() {
  const comments = useSelector((state) => state.comment);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

        

  useEffect(() => {
    setIsLoading(true);
    apiClient.get("/")
      .then(response => {
        setIsLoading(false);
        const dataComments = response.data;
        dispatch(fetchAddComment(dataComments))
      })
      .catch(err => {
        setIsLoading(false);
      })

  }, []);


  return (
    <Container>
      <LoadingOverlay active={isLoading}/>

      {comments.map((comment) => {
        return (
          <CommentItem
            className="commentItem"
            key={comment.id}
            comment={comment}
          />
        );
      })}

      <CommentForm />
    </Container>
  );
}

export default CommentsList;
