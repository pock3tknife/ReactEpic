import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";

import Employees from "./components/pages/Employees/Employees";
import Restaurant from "./components/pages/Order/index";

import Signup from "./components/pages/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/pages/PrivateRoute";
import ForgotPassword from "./components/pages/ForgotPassword";
import UpdateProfile from "./components/pages/UpdateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute path="/Dashboard" exact component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/employees" component={Employees} />
          <Route path="/order" component={Restaurant} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
