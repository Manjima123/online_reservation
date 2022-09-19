import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import userservice from "../service/userservice";
const Userlist = () => {
  const [user, setUsers] = useState([]);

  const init = () => {
    userservice
      .getAll()
      .then((response) => {
        console.log("Printing user data", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="container">
      <h3 style={{ color: "black", fontWeight: "bolder", fontSize: "40px" }}>
        List of Users
      </h3>
      <hr />
      <div>
        <table className="table table-bordered table-dark table-striped">
          <thead className="thead-light">
            <tr>
              <th> UserName</th>
              <th> EmailId</th>
              {/* <th> Password</th> */}
              <th> Age</th>
              <th> Gender</th>
              <th> PhoneNo</th>
              <th> Roles</th>
            </tr>
          </thead>
          <tbody>
            {user.map((users) => (
              <tr key={users.id}>
                <td>{users.username}</td>
                <td>{users.emailId}</td>
                {/* <td>{users.password}</td> */}
                <td>{users.age}</td>
                <td>{users.gender}</td>
                <td>{users.ph_no}</td>
                <td>{users.roles}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Adminprofile">
          <button className="bckc">Back </button>
        </Link>
      </div>
    </div>
  );
};

export default Userlist;
