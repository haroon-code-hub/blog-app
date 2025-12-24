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

  function addPost(newPost) {
    const lastId = posts[posts.length - 1].id;
    setPosts((prev) => [...prev, { ...newPost, id: lastId + 1 }]);
  }

  return (
    <PostContext.Provider value={{ posts, setPosts, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
