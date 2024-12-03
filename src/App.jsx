import "./App.css";
import Header from "./components/Header";
import Why from "./routes/why/Why";
import What from "./routes/what/what";
import How from "./routes/how/How";
import Intro from "./routes/home/Home";
import Demo from "./routes/demo/Demo";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Why />
      <What />
      <How />
      <Demo />
    </>
  );
}

export default App;
