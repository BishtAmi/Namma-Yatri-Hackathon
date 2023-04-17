import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Signup = () => {
  const handelsubmit = (event) => {
    event.preventDefault();
    alert("you have submitted the form");
  };
  return (
    <div class="namosign">
      <div class="mb-6 text-center">
        <h2>Sign-Up</h2>
      </div>
      <Form onSubmit={handelsubmit}>
        <Form.Group controlId="form.name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder="Amit" required></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.ph">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phonenumber"
            placeholder="94105830XX"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="ami@gmail.com"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" required></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="" required></Form.Control>
        </Form.Group>
        <Form.Group>
          <div class="mb-6 text-center">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Signup;
