import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/layout/MainContainer";
import Post from "./components/Post";
import { Switch, Route, useHistory } from "react-router-dom";
import EditForm from "./components/pages/EditForm";

function App() {
  const [posts, setPosts] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  function handlePostClick(id) {
    history.push(`/posts/${id}/edit`);
  }

  return (
    <MainContainer>
      <Switch>
        <Route path="/posts/:id/edit">
          <EditForm />
        </Route>
        <Route exact path="/">
          <Header title="One More Blog" />
          {posts &&
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                  onClick={() => handlePostClick(post.id)}
                />
              );
            })}
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default App;
