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
  };
  return (
    <div className="medPost">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">
              {post.date}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <h5>Medication: {post.medname}</h5>
            <h5>Amount Taken: {post.medamount}</h5>
            <h5>Time Taken: {post.timetaken}</h5>
              <div class="mdl-card__actions mdl-card--border">
                <Link to={`/post/${post.id}`}>
                Info
                </Link>
              </div>
          </div>
        </div>
      </div>
      /* <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Date</th>
          <th>Medication</th>
          <th>Quantity</th>
          <th>Time Taken</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td className="mdl-data-table__cell--non-numeric">{post.date}</td>
        <td>{post.medname}</td>
        <td>{post.medamount}</td>
        <td>{post.timetaken}</td>
        </tr>
      </tbody>
    </table>*/
  );
};

export default Post;