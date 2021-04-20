import React, {useState, useEffect, useCallback} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function ShortPost ({
    post,
    postIndex
}) {
    const [days, setDays] = useState(0)
    const [shortPost, setShortPost] = useState('')
    // function to create a short substring of the blog content
    const shortenText = useCallback((text) => {
        if (text.length > 30) {
          return text.substring(0, 100)
        }
      },[])
    
    useEffect(() => {
            const shorttenedText = shortenText(post.body)
            setShortPost(shorttenedText)
    },[shortenText, post.body])

    useEffect(() => {
        const date = JSON.parse(post.time)
        const newDate = new Date(date)
        const today = new Date()
        const timeDiff = today.getTime() - newDate.getTime()
        const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
        setDays(dayDiff)
    },[post.time])


    // return a presentation component which displays a short version of the blog post
    return (
        <div className = "shortPost">
            <div className = "data">
                <div className = "content">
                <p3 className = "date">{"Posted " + days + " days ago..."}</p3>
                <div className = "text">
                <h1 className = "title">{post.title}</h1>
                <p className = "shortText">{shortPost + " ..."}</p>
                </div>
                <Link className = "link" to={`/post/${postIndex + 1}`}>Read More</Link>
                </div>
            </div>
        </div>
    )
}             

export default ShortPost