import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AllTour from "./Pages/AllTour";
import Booking from "./Pages/Admin/Booking";
import Profile from "./Pages/Admin/Profile";
import Login from "./Pages/Login";
import TourDetails from "./Pages/TourDetails";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin/Admin";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddTour from "./Pages/Admin/AddTour";
import OrderList from "./Pages/Admin/OrderList";
import ManageOrder from "./Pages/Admin/ManageOrder";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/orderlist">
              <OrderList></OrderList>
            </PrivateRoute>
            <Route exact path="/alltour">
              <AllTour></AllTour>
            </Route>
            <PrivateRoute exact path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/addtour">
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute exact path="/tourdetails/:id">
              <TourDetails></TourDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/admin">
              <Admin></Admin>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
