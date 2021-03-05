import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Container, Form, Input, Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/auth";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("incorrect email entered")
    .required("fill in your email"),
  password: yup.string().required(),
});

function LoginForm() {
  const authUser = useSelector((state) => state.auth.user);

  const history = useHistory();
  const dispatch = useDispatch();
  const [enterError, setEnterError] = useState(false);
  const [areEnter, setAreEnter] = useState(false);

  const { handleSubmit, errors, control, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const saveUser = (user) => {
    try {
      const serialisedUser = JSON.stringify(user);
      window.sessionStorage.setItem("user_state", serialisedUser);
    } catch (err) {}
  };

  const onSubmit = (data) => {
    dispatch(login(data)).then((result) => {
      if (result.payload.success) {
        const sessionData = {
          email: result.payload.user[0].email,
          password: result.payload.user[0].password,
        };
        setEnterError(false);
        setAreEnter(true);
        saveUser(sessionData);
        history.replace("/");
      } else {
        setEnterError(!result.payload.success);
      }
    });
  };
  return (
    <Container>
      {enterError && (
        <Message negative>
          <Message.Header>Please try again</Message.Header>
          <p>Incorrect email or password </p>
        </Message>
      )}
      {areEnter && (
        <Message positive>
          <Message.Header>{`Hello dear ${authUser[0].firstName}`}</Message.Header>
          <p>
            <b>Enjoy the shopping</b>
          </p>
        </Message>
      )}
      {!areEnter && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label htmlFor="">Email</label>
            <Controller
              name="email"
              control={control}
              as={Input}
              placeholder="your@gmail.com"
              defaultValue=""
            />
            {errors.email && (
              <Message color="red">{errors.email.message}</Message>
            )}
          </Form.Field>
          <Form.Field>
            <label htmlFor="">Password</label>
            <Controller
              type="password"
              name="password"
              control={control}
              as={Input}
              placeholder="*****"
              defaultValue=""
            />
            {errors.firstName && (
              <Message color="red">{errors.password.message}</Message>
            )}
          </Form.Field>
          <Button type="submit" primary>
            Sign In
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default LoginForm;
