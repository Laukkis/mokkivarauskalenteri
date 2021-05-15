import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Reservations = () => {
  return (
    <div>
      <div id="ReservationScreen">
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Varaus</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <h1>Varaukset</h1>
        </Container>
      </div>
      <Container id="Reservation-Info">
        <Row>
          <Col sm={2}>
            <h5>Varauspäivä</h5>
          </Col>
          <Col sm={2}>
            <h5> 20.7.2021</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <h5>Varaaja:</h5>
          </Col>
          <Col sm={2}>
            <h5>Tatu Laukkanen</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <h5>Lisätietoja:</h5>
          </Col>
          <Col sm={6}>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              blandit lorem at ligula fringilla, eget ultricies velit tincidunt.
              Donec volutpat eros eu vulputate cursus. Sed eget ullamcorper
              orci. In a euismod neque. Vestibulum tincidunt eu est id dictum.
              Nunc non semper lectus. Curabitur fermentum magna eu rutrum
              commodo.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservations;
