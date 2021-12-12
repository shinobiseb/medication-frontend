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
    <form onSubmit={handleSubmisson}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.date}
        name="date"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.timetaken}
        name="timetaken"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.medname}
        name="medname"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.medamount}
        name="medamount"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
