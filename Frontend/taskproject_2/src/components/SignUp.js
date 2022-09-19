import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import userservice from "../service/userservice";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setName] = useState("");
  const [emailId, setEmail] = useState("");

  const [password, setPass] = useState("");
  const [age, setAge] = useState("");

  const [gender, setGender] = useState("");
  const [ph_no, setPhone] = useState("");
  const [roles, setRoles] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveUser = (e) => {
    e.preventDefault();

    const user = { username, emailId, password, age, gender, ph_no, roles, id };

    if (id) {
      //update
      userservice
        .update(user)
        .then((response) => {
          console.log("user data updated successfully", response.data);
          navigate("/user");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      userservice
        .create(user)
        .then((response) => {
          console.log("user added successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      userservice
        .getUserId(id)
        .then((user) => {
          setName(user.data.username);
          setEmail(user.data.emailId);
          setPass(user.data.password);
          setAge(user.data.age);
          setGender(user.data.gender);
          setPhone(user.data.ph_no);
          setRoles(user.data.roles);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <>
      <section className="showcase login">
        <div className="showcase-overlay">
          <form className="form-control">
            <input
              style={{ width: "300px" }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px" }}
              type="email"
              placeholder="Enter email"
              value={emailId}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px" }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px" }}
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px" }}
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px" }}
              type="number"
              placeholder="Mobile No."
              value={ph_no}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br></br>
            <input
              style={{ width: "300px" }}
              type="text"
              placeholder="User/Admin"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            />
            <br></br>
            <Button
              
              variant="primary"
              onClick={handleShow}
            >
              Create Account
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Do you want to register?</Modal.Title>
              </Modal.Header>
              <Modal.Body>If yes,click on Save!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={(o) => saveUser(o)}>
                  <Link to="/" style={{ color: "white" }}>
                    Save{" "}
                  </Link>
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
