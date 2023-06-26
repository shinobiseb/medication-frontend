import AllPosts from "./pages/AllPosts";
import SinglePost from './pages/SinglePost';
import Form from './pages/Form';
import Header from './components/header';


import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"


function App() {

  //Styling
  const h1 = {
    textAlign: "center",
    margin: "10px"
  };

  const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto",
};

  ///////////////////
  //State and other variables
  ///////////////////

  //API URL
  const url = "https://web-production-d33d.up.railway.app/dates/";

  const [posts, setPosts] = useState([]);

  // an object that represents a null date
const nullDate = {
  subject: "",
  details: "",
};

const [targetDate, setTargetDate] = useState(nullDate)


  //Functions

  //nav
  const navigate = useNavigate()


  //Get Dates from API
  const getDates = async() => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  }

  // Function to add Date from form data
const addDates = async (newDate) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDate),
  });

  // get updated list of Dates
  getDates();
};

// Function to select date to edit
const getTargetDate = (date) => {
  setTargetDate(date);
  navigate("/edit");
};

// Function to edit date on form submission
const updateDate = async (date) => {
  const response = await fetch(url + date.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(date),
  });

  // get updated list of Dates
  getDates();
};

// Function to Delete
// Function to edit Date on form submission
const deleteDate = async (Date) => {
  const response = await fetch(url + Date.id + "/", {
    method: "delete",
  });

  // get updated list of Dates
  getDates();
  navigate("/");
};

  //useEffect to get the dates
  useEffect(()=> {
    getDates();
  }, [])

  //Returned JSX
  return (
    <div className="App">
      <Header/>
      <Link to="/new">
        <button id="addDate" class=" mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
          <i class="material-icons">add</i>
        </button>
        </Link>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts}/>}/>
        <Route path="/post/:id" element={<SinglePost posts={posts} 
        edit={getTargetDate}
        deleteDate={deleteDate}
        />}/>

        <Route path="/new" element={
        <Form 
        initialDate={nullDate}
        handleSubmit={addDates}
        buttonLabel={"create"}
        />}/>
        <Route path="/edit" element={<Form
        initialDate={targetDate}
        handleSubmit={updateDate}
        buttonLabel="update Date"
      /> } />
      </Routes>
    </div>
  );
}

export default App;
