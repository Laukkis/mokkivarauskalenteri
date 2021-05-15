import React, { useState, useEffect } from "react";
import db from "../config/config";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";
import Container from "react-bootstrap/Container";
import Calendar from "react-calendar";

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  const [user, setUser] = useState([]);
  const reservations = [];

  useEffect(() => {
    getUser();
    getDates();
  }, []);
  const getDates = async () => {
    db.collection("varaukset")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        reservations.push(data);
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
    return <p>Varaus</p>;
  }

  function NoReservations(props) {
    return <p>Ei varauksia</p>;
  }
  function ReservationsText(props) {
    if (reservations.length === 0) {
      return <Reservations />;
    }
    return <NoReservations />;
  }

  return (
    <div className="Calendar">
      <Container>
        <h5>Hei, {user}</h5>
        <Calendar onChange={onChange} value={value} />
        <Container className="Reservations-Container">
          <h5>Kaikki varaukset</h5>
          <div className="Reservations">
            <p>{ReservationsText()}</p>
          </div>
        </Container>

        <Container className="Reservations-Container">
          <h5>Omat varaukset</h5>
          <div className="Reservations">
            <p>Ei omia varauksia</p>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
