import React from "react";
import { fetchPost } from "./fetchPostapi";
import ShortPost from "./shortPost"


function Homepage ({posts}) {
  //map through the posts, and return a shortpost component for each post
  return (
    <div className="homepage">
        {posts.map((post, postIndex) => (
          <ShortPost
            post = {post}
            key = {postIndex}
            postIndex = {postIndex}
          />
        ))}
    </div>
  );
}
export default Homepage