import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Container,
  Form,
  Input,
  Message,
  Select,
} from "semantic-ui-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import apiClient from "../server/api/API";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("incorrect email entered")
    .required("fill in your email"),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().required(),
  age: yup.number().positive().integer().min(15).max(99).required(),
});

function RegisterForm() {
  const [enterError, setEnterError] = useState(false);
  const dispatch = useDispatch();
  const [hasRegistered, setHasRegistered] = useState(false);
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    apiClient
      .post("/signup", data)
      .then((res) => {
        setHasRegistered(res.data.sucess);
      })
      .catch((err) => {
        setEnterError(true);
      });
  };

  return (
    <Container>
      {hasRegistered ? (
        <Redirect to={{ pathname: "/signin" }} />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="">First Name</label>
              <Controller
                name="firstName"
                control={control}
                as={Input}
                placeholder="Your name"
                defaultValue=""
              />
              {enterError && (
                <Message negative>
                  <Message.Header>Please try again</Message.Header>
                  <p>Incorrect email </p>
                </Message>
              )}
              {errors.firstName && (
                <Message color="red">{errors.firstName.message}</Message>
              )}
            </Form.Field>

            <Form.Field>
              <label htmlFor="">Last Name</label>
              <Controller
                name="lastName"
                control={control}
                as={Input}
                placeholder="Your lastname"
                defaultValue=""
              />
              {errors.lastName && (
                <Message color="red">{errors.lastName.message}</Message>
              )}
            </Form.Field>

            <Form.Field>
              <label htmlFor="">Age</label>
              <Controller
                name="age"
                control={control}
                placeholder="18"
                defaultValue=""
                type="number"
                as={Input}
              />
              {errors.age && (
                <Message color="red">{errors.age.message}</Message>
              )}
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Controller
                as={Input}
                name="email"
                id="form-input-control-error-email"
                control={control}
                label="Email"
                placeholder="your@gmail.com"
                defaultValue=""
              />
            </Form.Field>
            <Form.Field>
              <Controller
                as={Input}
                name="password"
                type="password"
                id="form-input-control-password"
                control={control}
                label="Password"
                placeholder="*******"
                defaultValue=""
              />
              {errors.email && (
                <Message color="red">{errors.password.message}</Message>
              )}
            </Form.Field>
          </Form.Group>
          <Button type="submit" primary>
            Sign Up
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default RegisterForm;
