import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/layout/MainContainer";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("http://localhost:3004/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <MainContainer>
      <Header title="One More Blog" />
      {posts &&
        posts.map((post) => {
          return <Post post={post} />;
        })}
    </MainContainer>
  );
}

export default App;
