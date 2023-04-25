import React from "react";
import { Form } from "react-bootstrap";
const Home = () => {
  return (
    <div className="centre-mohit">
      <div className="auto">
      <img
        src="https://nammayatri.in/img/autoMap.png"
      ></img>
      </div>
      <div className="fo">
        <Form>
          <div className="namoHome">
            <h3>Get an Instant Ride</h3>
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
            <Form.Group>
              <div class="text-center" id="sub">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Home;
