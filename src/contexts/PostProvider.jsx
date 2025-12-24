import { useState } from "react";
import { PostContext } from "./PostContext";
function PostProvider(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello World",
      content: "Welcome to a new blog",
    },
    {
      id: 2,
      title: "Learn React",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 3,
      title: "Technologies",
      content:
        "React, Node.js, Express.js, MongoDB are good technologies for web development.",
    },
  ]);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
