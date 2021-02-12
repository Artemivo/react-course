import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Comment, Button, Input } from "semantic-ui-react";

import {
  deleteComment,
  editComment,
  fetchDeleteComment,
  fetchAddComment,
} from "../redux/actions/actions";
import apiClient from "../server/api/API";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";

const dateFormat = require("dateformat");

function CommentItem({ comment }) {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(comment.text);
  const [isLoading, setIsLoading] = useState(false);
  const commentId = comment.id;
  const now = new Date();
  const myDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  const dispatch = useDispatch();

  return (
    <Container>
      <LoadingOverlay actiom={isLoading} />
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">{comment.title}</Comment.Author>
            <Comment.Metadata>
              <div>{comment.date}</div>
            </Comment.Metadata>
          </Comment.Content>
          {editable ? (
            <Input
              focus
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></Input>
          ) : (
            <Comment.Text>{comment.text}</Comment.Text>
          )}
        </Comment>
      </Comment.Group>
      <Button
        onClick={() => {
          setIsLoading(true);
          apiClient
            .delete(`/${commentId}`)

            .then(() => {
              setIsLoading(false);
              dispatch(deleteComment(commentId));
            })
            .catch((err) => {
              setIsLoading(false);
              console.log(err);
            });
        }}
        content="Delete Comment"
        labelPosition="right"
        icon="window close outline"
        color="red"
      />
      <Button
        onClick={() => {
          setIsLoading(true);
          apiClient
            .put(`/${commentId}`, { text: text })

            .then(() => {
              setIsLoading(false);
              dispatch(
                editComment({
                  ...comment,
                  text: text,
                })
              );
            })
            .catch((err) => {
              setIsLoading(false);
              console.log(err);
            });
          if (!editable) {
            setText(comment.text);
          }
          setEditable(!editable);
        }}
        color="green"
      >
        {!editable ? "Edit Comment" : "Update Comment"}
      </Button>
    </Container>
  );
}

export default CommentItem;
