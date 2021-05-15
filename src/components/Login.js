import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  return (
    <div className="Login">
      <Container className="Login-Container">
        <h1>Kirjaudu</h1>
        <Form className="Form">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => onChangeHandler(event)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => onChangeHandler(event)}
            />
          </Form.Group>
          <Button className="Button" type="submit">
            Kirjaudu
          </Button>
          <p
            style={{ fontSize: "13px", fontWeight: "600" }}
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            Kirjaudu Google tilillä
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
