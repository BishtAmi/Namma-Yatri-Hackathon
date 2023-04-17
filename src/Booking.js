import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Booking = () => {
  const handelsubmit = (event) => {
    event.preventDefault();
    alert("you have submitted the form");
  };
  <div
    style="
    background-image: url('https://mdbootstrap.com/img/new/standard/city/041.jpg');
  "
  ></div>;
  return (
    <div className="namobook">
      <div class="mb-6 text-center">
        <h2>Booking</h2>
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
        <Form.Group controlId="locationp">
          <Form.Label>Pickup Location</Form.Label>
          <Form.Control
            type="location"
            placeholder="Manan"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="locationd">
          <Form.Label>Dropout Location</Form.Label>
          <Form.Control
            type="location"
            placeholder="Almora"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" placeholder="12:00" required></Form.Control>
        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="Date"
            placeholder="12/01/2003"
            required
          ></Form.Control>
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

export default Booking;
