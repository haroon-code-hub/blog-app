import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";
import Post from "../components/Post";
function Home() {
  const { posts } = useContext(PostContext);
  return (
    <>
      <h3>Blog Posts</h3>
      <ul
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
