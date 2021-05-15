import { config } from "./config/config.js";
import Dashboard from "./screens/Dashboard.js";
import Reservations from "./screens/reservations.js";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AuthHeader from "./components/AuthHeader";
import Login from "./components/Login";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";
import { FirebaseAuthProvider, IfFirebaseAuthed } from "@react-firebase/auth";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <div className="App">
        <FirebaseAuthProvider {...config} firebase={firebase}>
          <Router>
            <Route exact path="/">
              <Header />
              <Login />
            </Route>
            <IfFirebaseAuthed>
              <PrivateRoute path="/dashboard" component={Dashboard}>
                <AuthHeader />
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/varaukset" component={Reservations}>
                <AuthHeader />
                <Reservations />
              </PrivateRoute>
            </IfFirebaseAuthed>
          </Router>
        </FirebaseAuthProvider>
      </div>
    </FirestoreProvider>
  );
}

export default App;
