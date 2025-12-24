function Post(props) {
  return (
    <>
      <div
        style={{
          padding: 20,
          margin: 20,
          width: 300,
          border: "2px solid black",
        }}
      >
        <h4>{props.post.title}</h4>
        <p>{props.post.content}</p>
      </div>
    </>
  );
}

export default Post;
