import React from "react";

function PostPage ({ match, 
                    location, 
                    posts
                    }) {
    const {
        params: { postId },
      } = match;
    return (
    <div className = "postPage">
        <img src="https://www.betterup.com/Images/home/home-office.jpg" alt="Italian Trulli"  id = "postPagePhoto"/>
        <div className = "postText">
        <h1 className = "fullTitle">{posts[postId-1].title}</h1>
        <p1 className = "fullText">{posts[postId-1].body}</p1>
        </div>
    </div>
    )

}
export default PostPage