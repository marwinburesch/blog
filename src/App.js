import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/layout/MainContainer";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <MainContainer>
      <Header title="One More Blog" />
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </MainContainer>
  );
}

export default App;
