import React from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/modal";
import { useState } from "react";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, edit, deleteDate}) => {
  const params = useParams()
  const id = parseInt(params.id); //get the id from url param
  const post = posts.find((post) => post.id === id);

  ////////////////////
  // Styles
  ///////////////////

  const [show, setShow] = useState(false)

  if(!post){return <h1>Nothing Found</h1>}

  const deleteButton = () => <button className="buttonShow" onClick={(event)=> deleteDate(post)}>Yes</button>

 

  return (
    <div className="AppContainer">
    <div class="card demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">
              {post.date}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <h5>Medication: {post.medname}</h5>
            <h5>Amount Taken: {post.medamount}mg</h5>
            <h5>Time Taken: {post.timetaken}</h5>
          </div>
      <div className="buttonDiv">
      <button className="buttonShow" onClick={(event) => edit(post)}>Edit</button>

      <Link to="/">
        <button className="buttonShow">Go Back</button>
      </Link>
        <button className="buttonShow" onClick = {()=> {setShow(true)}}>Delete</button>
        <Modal onClose={()=> setShow(false)} show={show} delButton={deleteButton()}/>
      </div>
    </div>
  </div>
  );
};

export default SinglePost;