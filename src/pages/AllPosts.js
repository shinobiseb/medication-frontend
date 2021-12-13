import React from "react";
import Post from "../components/post";

const AllPosts = (props) => {
  // For each post in the array render a Post component
  return <div>
    {props.posts?.map((post) => <Post post={post} key={post.id} />)};
  </div>
};

export default AllPosts;

      {/* <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Date</th>
          <th>Medication</th>
          <th>Quantity</th>
          <th>Time Taken</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{post.date}</td>
        <td>{post.medname}</td>
        <td>{post.medamount}</td>
        <td>{post.timetaken}</td>
        </tr>
      </tbody>
      </table> */}