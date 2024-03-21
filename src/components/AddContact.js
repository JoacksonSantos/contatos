import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkIdade = contacts.find(
      (contact) => contact.idade === idade && contact
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === number && parseInt(number)
    );

    if (!idade || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkIdade) {
      return toast.error("This email already exists!");
    }

    if (checkNumber) {
      return toast.error("This number already exists!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      idade,
      number
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student added successfully!");
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className="display-3 text-center my-3">Add Student</h1>
      <div className="row">
        <div className="col-md-6 mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form=group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Idade"
                className="form-control"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone No"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="fomr-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark my-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
