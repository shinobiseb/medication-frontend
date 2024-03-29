import React from "react";
import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  }
  return (
    <div className="medPost">
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">
              {post.date}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <h5>Medication: {post.medname}</h5>
            <h5>Amount Taken: {post.medamount}mg</h5>
            <h5>Time Taken: {post.timetaken}</h5>
              <div className="mdl-card__actions mdl-card--border">
                <Link to={`/post/${post.id}`}>
                  Edit Card
                </Link>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Post