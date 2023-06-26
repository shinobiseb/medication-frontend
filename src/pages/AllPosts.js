import React from "react";
import Post from "../components/post";

const AllPosts = (props) => {
  // For each post in the array render a Post component
  return <div>
    {props.posts?.map((post) => <Post post={post} key={post.id} />)}
  </div>
}

export default AllPosts