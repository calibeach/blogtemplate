import React, { useState, useEffect, useCallback } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./homepage"
import PostPage from "./PostPage"
import { fetchPost } from "./fetchPostapi";
// import data from './data.json'
import './App.scss';

const App = () => {
  // declaring state for posts and isLoading
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // creating a helper function to get data 
  const getPosts = useCallback(async function getPosts () {
      const posts = await fetchPost ()
      return posts
  }, []);

  //simulating a useEffect to get data to set posts variable
  useEffect(() => {
    getPosts().then ((data) => setPosts(data.results))
    // setting isLoading to false so that the page renders only after the api finishes loading data
    .then(setIsLoading(false))
  },[getPosts, posts])

  // rendering the app and passing state down only after the api has completed retriving the data
  return (
    <div className = "App">
    {!isLoading  &&    
      <Router>
      <Route 
            exact path="/" 
            render={props => (<Homepage 
                              {...props} 
                              posts={posts}/>) }
        />
      <Route 
        exact path="/post/:postId" 
        render={props => (<PostPage 
                          {...props} 
                          posts={posts}/>) }
          />  
      </Router>}
    </div>
  );
};

export default App;