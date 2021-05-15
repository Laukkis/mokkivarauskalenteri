import { config } from "./config/config.js";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

<FirebaseAuthProvider {...config} firebase={firebase}>
  <div>
    <div className="login">
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Sign In with Google
      </button>
      <button
        data-testid="signin-anon"
        onClick={() => {
          firebase.auth().signInAnonymously();
        }}
      >
        Sign In Anonymously
      </button>
    </div>
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return <p>Jos ei kirjautunut tulee tämä</p>;
      }}
    </FirebaseAuthConsumer>
    <div>
      <IfFirebaseAuthed>
        {() => {
          return (
            <div>
              <p>Jos kirjautunut tulee tämä</p>
              <button
                onClick={() => {
                  firebase.auth().signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          );
        }}
      </IfFirebaseAuthed>
      <IfFirebaseAuthedAnd
        filter={({ providerId }) => providerId !== "anonymous"}
      >
        {({ providerId }) => {
          return <div>Jos kirjautunut tulee tämä</div>;
        }}
      </IfFirebaseAuthedAnd>
    </div>
  </div>
</FirebaseAuthProvider>;

const response = db.collection("varaukset");
const data = await response.get();
data.docs.forEach((item) => {
  setDates([...dates, item.data()]);
  console.log(dates);
});

{
  dates.map(dates, (i) => {
    <p>{dates.userName}</p>;
  });
}

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

reservations.push(data);
console.log(reservations);
