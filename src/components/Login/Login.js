import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

async function loginUser(credentials) {
  const url = new URL(`${API_BASE_URL}/login`);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Username:", username, "Password:", password);
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        <br />
        This is a template login page. You could enter any character combination
        for a username and password to receive a token that directs to the next
        page.
        <br />
        <br />
        Currently the template is programmed for <strong>sessionStorage</strong>
        .
        <br />
        <br />
        Changing between sessionStorage and localStorage allows different
        benefits, such as localStorage's ability to save data across windows.
        Unlike sessionStorage, localStorage will save data even after the
        session ends. This can be more convenient, since it lets users open
        multiple windows and tabs without a new login, but it does have some
        security problems. If the user shares their computer, they will remain
        logged in to the application even though they close the browser. It will
        be the user’s responsibility to explicitly log out. The next user would
        have immediate access to the application without a login. It’s a risk,
        but the convenience may be worth it for some applications.
      </p>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
