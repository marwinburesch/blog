import Header from "./components/Header";
import MainContainer from "./components/layout/MainContainer";
import Post from "./components/Post";

function App() {
  return (
    <MainContainer>
      <Header title="One More Blog" />
      <Post title="Just another post about stuff" />
    </MainContainer>
  );
}

export default App;
