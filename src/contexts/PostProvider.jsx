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

  function findPostById(id) {
    return posts.find((post) => post.id === id);
  }

  function updatePost(updatedPost) {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  }

  return (
    <PostContext.Provider
      value={{ posts, setPosts, addPost, findPostById, updatePost }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
