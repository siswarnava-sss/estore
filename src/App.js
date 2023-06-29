
import "./App.css";
import CatNav from "./components/CatNav/CatNav";
import MainComponent from "./components/MainComponent/MainComponent";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;
