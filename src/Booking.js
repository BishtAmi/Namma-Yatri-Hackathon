import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
const Booking = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setmail] = useState("");
  const [pickup, setpickup] = useState("");
  const [dropout, setdropout] = useState("");
  const [time, settime] = useState("");
  const [date, setdate] = useState("");
  const history = useHistory();
  const handelsubmit = (e) => {
    e.preventDefault();
    const book = { name, phone, email, pickup, dropout, time, date };
    fetch("http://localhost:8000/book/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      history.push("/");
    });
  };
  // <div
  //   style="
  //   background-image: url('https://mdbootstrap.com/img/new/standard/city/041.jpg');
  // "
  // ></div>;
  return (
    <div className="namobook">
      <div class="mb-6 text-center">
        <h2>Booking</h2>
      </div>
      <Form onSubmit={handelsubmit}>
        <Form.Group controlId="form.name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Amit"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.ph">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="94105830XX"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="ami@gmail.com"
            required
            value={email}
            onChange={(e) => setmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="locationp">
          <Form.Label>Pickup Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Manan"
            required
            value={pickup}
            onChange={(e) => setpickup(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="locationd">
          <Form.Label>Dropout Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Almora"
            required
            value={dropout}
            onChange={(e) => setdropout(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          placeholder="12:00"
          required
          value={time}
          onChange={(e) => settime(e.target.value)}
        ></Form.Control>
        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="Date"
            placeholder="12/01/2003"
            required
            value={date}
            onChange={(e) => setdate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <div class="mb-6 text-center">
            <button class="btn btn-primary">Submit</button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Booking;
