import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Container, Form, Button, Input } from "semantic-ui-react";
import apiClient from "../server/api/API";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import { addComment } from "../redux/actions/actions";

const dateFormat = require("dateformat");
const shortid = require("shortid");

function CommentForm() {
  const now = new Date();
  const myDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  const idComment = shortid.generate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const commentObj = {};

  return (
    <Container>
      <LoadingOverlay active={isLoading}/>
      <Form reply>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          iconPosition="left"
          label={{ tag: true, content: "Name" }}
          labelPosition="left"
          placeholder="Enter your name"
        />
        <Form.TextArea onChange={(e) => setText(e.target.value)} value={text} />
        <Button
          onClick={() => {
            setIsLoading(true);
            apiClient
              .post("/signup", {
                id: idComment,
                photo:
                  "https://i.pinimg.com/originals/8f/21/18/8f21183292ee311fe8e3befcb26ef94a.jpg",
                title: name,
                text: text,
                date: myDate,
              })

              .then(() => {
                setIsLoading(false);
                dispatch(
                  addComment({
                    id: idComment,
                    photo:
                      "https://i.pinimg.com/originals/8f/21/18/8f21183292ee311fe8e3befcb26ef94a.jpg",
                    title: name,
                    text: text,
                    date: myDate,
                  })
                );
              })
              .catch((err) => {
                setIsLoading(false);
              });
            setName("");
            setText("");
          }}
          content="Add Comment"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Container>
  );
}

export default CommentForm;
