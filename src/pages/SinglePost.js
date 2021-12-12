import React from "react";
import { Link, useParams } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, edit, deleteDate}) => {
  const params = useParams()
  const id = parseInt(params.id); //get the id from url param
  const post = posts.find((post) => post.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.date}</h1>
      <h2>{post.timetaken}</h2>
      <h2>{post.medname}</h2>
      <h2>{post.medamount}</h2>
      <button onClick={(event) => edit(post)}>Edit {post.date}</button>
      <Link to="/">
      <button onClick={(event)=> deleteDate}>Delete {post.date}</button>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;