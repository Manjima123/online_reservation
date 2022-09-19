import React from "react";
import { useEffect, useState } from "react";
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import trainservice from "../service/trainservice";

import { Link } from "react-router-dom";

const Trainlist1 = () => {
  const [train, setTrains] = useState([]);

  const init = () => {
    trainservice
      .getAll()
      .then((response) => {
        console.log("Printing train data", response.data);
        setTrains(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const handleDelete = (id) => {
    console.log("Printing id", id);
    trainservice
      .remove(id)
      .then((response) => {
        console.log("Train details has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="showcase login">
      <div className="showcase-overlay">
        <div className="container">
          {/* <h3
            style={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}
          >
            List of Trains
          </h3> */}
          <hr />

          <div>
            <table className="table table-bordered table-light table-striped">
              <thead className="thead-light">
                <tr>
                  <th> train_no</th>
                  <th> train_name</th>
                  <th> start_from</th>
                  <th> departure_time</th>
                  <th> to_destination</th>
                  <th> arrival_time</th>
                  <th> price</th>
                  <th> action</th>
                </tr>
              </thead>
              <tbody>
                {train.map((trains) => (
                  <tr key={trains.id}>
                    <td>{trains.train_no}</td>
                    <td>{trains.train_name}</td>
                    <td>{trains.start_from}</td>
                    <td>{trains.departure_time}</td>
                    <td>{trains.to_destination}</td>
                    <td>{trains.arrival_time}</td>
                    <td>{trains.price}</td>
                    <td>
                      <Link
                        className="btn btn-warning"
                        to={`/trainlist/edit/${trains.id}`}
                      >
                        Update
                      </Link>

                      <button
                        className="btn btn-danger ml-2"
                        onClick={handleShow}
                      >
                        Delete
                      </button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Want to Delete?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>If yes , Click on Delete</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => {
                              handleDelete(trains.id);
                            }}
                          >
                            <Link
                              to="/Adminprofile"
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Delete
                            </Link>
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Link className="btn btn-warning" to="/Adminprofile">
          Back to Profile
        </Link>
      </div>
    </section>
  );
};

export default Trainlist1;
