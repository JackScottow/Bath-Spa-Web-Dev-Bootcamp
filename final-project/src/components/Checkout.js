import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../Css/Checkout.css";
const Checkout = () => {
  const sameAddress = true;
  return (
    <div className="checkout-container shadow">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Billing Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
            <Form.Control placeholder="Apartment, studio, or floor" />
            <Form.Control placeholder="City" />
            <Form.Select defaultValue="County">
              <option hidden>County</option>
              <option>Avon</option>
              <option>Berkshire</option>
              <option>Bedfordshire</option>
              <option>Buckinghamshire</option>
              <option>Cambridgeshire</option>
              <option>Cheshire</option>
              <option>Cornwall</option>
              <option>Cumbria</option>
              <option>Derbyshire</option>
              <option>Devon</option>
              <option>Dorset</option>
              <option>Durham</option>
              <option>Essex</option>
              <option>Gloucestershire</option>
              <option>Greater London</option>
              <option>Hampshire</option>
              <option>Herefordshire</option>
              <option>Hertfordshire</option>
              <option>Isle of Wight</option>
              <option>Kent</option>
              <option>Lancashire</option>
              <option>Leicestershire</option>
              <option>Lincolnshire</option>
              <option>Merseyside</option>
              <option>Norfolk</option>
              <option>Northamptonshire</option>
              <option>Northumberland</option>
              <option>Nottinghamshire</option>
              <option>Oxfordshire</option>
              <option>Rutland</option>
              <option>Schools</option>
              <option>Shropshire</option>
              <option>Somerset</option>
              <option>Staffordshire</option>
              <option>Suffolk</option>
              <option>Surrey</option>
              <option>Sussex</option>
              <option>Tyne and Wear</option>
              <option>Warwickshire</option>
              <option>West Midlands</option>
              <option>Wiltshire</option>
              <option>Worcestershire</option>
              <option>Yorkshire</option>
            </Form.Select>
            <Form.Control placeholder="Post Code" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Row>
              <Form.Label as={Col}>Billing Address</Form.Label>
              <Form.Label as={Col}>Billing Address</Form.Label>
            </Row>
            <Form.Control placeholder="1234 Main St" />
            <Form.Control placeholder="Apartment, studio, or floor" />
            <Form.Control placeholder="City" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" className="checkout-submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
