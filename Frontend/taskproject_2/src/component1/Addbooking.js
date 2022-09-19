import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthService from "../service/auth-service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bookingservice from "../service/bookingservice";
const Addbooking = () => {
  const [train_no, setTrainNo] = useState("");
  const [train_name, setTrainName] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [emailId, setEmailId] = useState("");
  const [start_from, setStartFrom] = useState("");
  const [coach_no, setCoachNo] = useState("");
  const [seat_no, setSeatNo] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const saveBooking = (e) => {
    e.preventDefault();

    const booking = {
      train_no,
      train_name,
      fname,
      lname,
      age,
      start_from,
      destination,
      emailId,
      coach_no,
      seat_no,
      id,
    };

    if (id) {
      //update
      bookingservice
        .update(booking)
        .then((response) => {
          console.log("booking data updated successfully", response.data);
          localStorage.setItem("email", booking.emailId);
          localStorage.setItem("train_name", booking.train_name);
          localStorage.setItem("train_no", booking.train_no);
          localStorage.setItem("fname", booking.fname);
          localStorage.setItem("lname", booking.lname);
          localStorage.setItem("age", booking.age);
          localStorage.setItem("bookingId", booking.id);
          localStorage.setItem("start_from", booking.start_from);
          localStorage.setItem("destination", booking.destination);
          window.location.href = "/fullticket";
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      bookingservice
        .create(booking)
        .then((response) => {
          console.log("booking added successfully", response.data);
          localStorage.setItem("email", booking.emailId);
          localStorage.setItem("train_name", booking.train_name);
          localStorage.setItem("train_no", booking.train_no);
          localStorage.setItem("fname", booking.fname);
          localStorage.setItem("lname", booking.lname);
          localStorage.setItem("age", booking.age);
          localStorage.setItem("bookingId", booking.id);
          localStorage.setItem("start_from", booking.start_from);
          localStorage.setItem("destination", booking.destination);
          localStorage.setItem("coach_no", booking.coach_no);
          localStorage.setItem("seat_no", booking.seat_no);
          window.location.href = "/fullticket";

          // localStorage.setItem("email", booking.emailId);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      bookingservice
        .get(id)
        .then((bookings) => {
          setTrainNo(bookings.data.train_no);
          setTrainName(bookings.data.train_name);
          setFname(bookings.data.fname);
          setLname(bookings.data.lname);
          setAge(bookings.data.age);
          setStartFrom(bookings.data.start_from);
          setDestination(bookings.data.destination);
          setEmailId(bookings.data.emailId);
          setSeatNo(bookings.data.seat_no);
          setCoachNo(bookings.data.coach_no);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  return (
    <>
      <section className="showcase login">
        {/* <div>
          <button onClick={showToastMessage}>Notify</button>
          <ToastContainer />
        </div> */}
        <div className="showcase-overlay">
          <form className="form-control" style={{ marginTop: "0.5px" }}>
            {/* <input
              style={{ width: "300px", height: "40px" }}
              type="number"
              placeholder="TrainNo"
              value={train_no}
              onChange={(e) => setTrainNo(e.target.value)}
            />
            <br></br> */}
            <input
              style={{ width: "300px", height: "40px" }}
              type="text"
              placeholder="Enter Train name"
              value={train_name}
              onChange={(e) => setTrainName(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px", height: "40px" }}
              type="text"
              placeholder="Enter First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px", height: "40px" }}
              type="text"
              placeholder="Enter Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px", height: "40px" }}
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            {/* <br></br> */}
            {/* <input
              style={{ width: "300px", height: "40px" }}
              type="text"
              placeholder="Start From"
              value={start_from}
              onChange={(e) => setStartFrom(e.target.value)}
            /> */}
            {/* <br></br> */}
            {/* <input
              style={{ width: "300px", height: "40px" }}
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            /> */}
            <br></br>
            <input
              style={{ width: "300px", height: "40px" }}
              type="email"
              placeholder=" Enter email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px", height: "40px" }}
              type="text"
              placeholder="Enter prefered coach"
              value={coach_no}
              onChange={(e) => setCoachNo(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px", height: "40px" }}
              type="number"
              placeholder="Enter Seat"
              value={seat_no}
              onChange={(e) => setSeatNo(e.target.value)}
            />
            <br></br>

            <Button
              style={{ width: "150px", height: "45px" }}
              onClick={(o) => saveBooking(o)}
              //variant=" #2c7f86;"
              type="submit"
              id="submit"
            >
              Confirm
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Addbooking;
