import { useEffect, useState } from "react";
import { PostContext } from "./PostContext";
function PostProvider(props) {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      return JSON.parse(storedPosts);
    } else {
      return [
        {
          id: 1,
          title: "Learn React",
          content:
            "React is a JavaScript library for building user interfaces.",
        },
        {
          id: 2,
          title: "Technologies",
          content:
            "React, Node.js, Express.js, MongoDB are good technologies for web development.",
        },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

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
