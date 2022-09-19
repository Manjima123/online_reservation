import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Destinations from "./components/Destinations";
// import Footer from "./components/Footer";
import Login from "./components/Userlogin";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Trainlist from "./component1/Trainlist";
import UserList from "./component1/UserList";
import Bookinglist from "./component1/Bookinglist";
import Addbooking from "./component1/Addbooking";
import Userlogin from "./components/Userlogin";

import Profile from "./components/Profile";

import Fullticket from "./component1/Fullticket";
import TrainDetails from "./component1/TrainDetails";
import Adminprofile from "./components/Adminprofile";
import Addtrain from "./component1/Addtrain";
import Trainlist1 from "./component1/Trainlist1";
import Adminlogin from "./components/Adminlogin";
import Bookingbyemail from "./component1/Bookingbyemail";
import SignUp1 from "./components/SignUp1";
import { Logout } from "./components/Logout";
function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* <Switch>
        <Route exact path="/">
          <Showcase />
          <Destinations />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/train">
          <Train />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer /> */}
      <Routes>
        {/* Land-Page Home, About */}
        <Route path="/" element={<Showcase />} />
        <Route path="/" element={<Destinations />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/Train" element={<Trainlist />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/User" element={<UserList />} />
        {/* <Route path="/Booking" element={<Bookinglist />} />
        <Route path="/Booking/edit/:id" element={<AddBooking />} /> */}
        {/* <Route path="/" */}
        <Route path="/Booking" element={<Bookinglist />} />
        <Route path="/Addbooking" element={<Addbooking />} />
        <Route path="/booking/edit/:id" element={<Addbooking />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/Addticket" element={<Addticket />} /> */}
        <Route path="/fullticket" element={<Fullticket />} />
        <Route path="/TrainDetails" element={<TrainDetails />} />
        <Route path="/addtrain" element={<Addtrain />} />
        <Route path="/bookingbyemail" element={<Bookingbyemail />} />
        <Route path="/trainlist1" element={<Trainlist1 />} />
        <Route path="/trainlist/edit/:id" element={<Addtrain />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/user/edit/:id" element={<SignUp1 />} />
        <Route path="/Adminprofile" element={<Adminprofile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
