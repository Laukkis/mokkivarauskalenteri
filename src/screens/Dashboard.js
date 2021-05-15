import React, { useState, useEffect } from "react";
import db from "../config/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  const [user, setUser] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    getUser();
    getDates();
  }, []);
  const getDates = async () => {
    db.collection("varaukset")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDates(data);
        console.log(dates);
      });
  };
  const getUser = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      // User is signed in.
      if (user) {
        setUser(user.displayName);
      }
      // No user is signed in.
      else {
        console.log("user is logged out");
      }
    });
  };

  function Reservations(props) {
    return <p>test</p>;
  }

  function NoReservations(props) {
    return <p>Ei varauksia</p>;
  }
  function ReservationsText(props) {
    if (dates.length === 0) {
      return <Reservations />;
    }
    return <NoReservations />;
  }
  function ReservationLink() {
    function handleCLick(e) {
      e.preventdefault();
      console.log("Test");
    }
  }
  return (
    <div>
      <div className="Calendar">
        <Container>
          <Row>
            <Col lg={6}>
              <Calendar onChange={onChange} value={value} />
            </Col>
            <Col lg={6}>
              <h1>Hei, {user}</h1>
              <Button id="bookingButton" className="Button">
                Varaa aika
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="Reservations-Container">
        <h5>Tulevat varaukset</h5>
        {dates.map((dates, i) => (
          <a href="/varaukset">
            <div className="Reservations">
              <h5>{dates.userName}</h5>
              <p>{dates.date}</p>
            </div>
          </a>
        ))}
        <p>Näytä kaikki</p>
      </Container>
      <div id="ownReservations">
        <Container className="Reservations-Container">
          <h5>Omat varaukset</h5>
          <div className="Reservations">
            <p>Ei omia varauksia</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
