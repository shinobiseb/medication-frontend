// Import useState hook
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

//destructure out props
const Form = ({ initialDate, handleSubmit, buttonLabel}) => {

  const navigate = useNavigate()

  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialDate state
  const [formData, setFormData] = useState(initialDate);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    navigate("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <div className="form">
    <form onSubmit={handleSubmisson}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.date}
        name="date"
        placeholder="Date Taken"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.medname}
        name="medname"
        placeholder="Medication Name"
      />
      <input
        type="number"
        onChange={handleChange}
        value={formData.medamount}
        name="medamount"
        placeholder="Amount Taken (in mg)"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.timetaken}
        name="timetaken"
        placeholder="Time Taken (00:00 Format)"
      />
      <input className="createDatesSubmit" type="submit" value={buttonLabel} />
    </form>
    </div>
  );
};

export default Form;
