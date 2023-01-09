import logo from "./logo.svg";
import "./App.css";
import HeroHeader from "./components/HeroHeader";
import Verdicts from "./components/Verdicts";
import PracticeTypes from "./components/PracticeTypes";

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <Verdicts />
      <PracticeTypes />
    </div>
  );
}

export default App;
