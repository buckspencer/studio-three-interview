import "./App.css";
import HeroHeader from "./components/HeroHeader";
import Verdicts from "./components/Verdicts";
import PracticeInfo from "./components/PracticeInfo";
import PracticeTypes from "./components/PracticeTypes";
import FromOurClients from "./components/FromOurClients";
import OurAttorneys from "./components/OurAttorneys";
import LogoCloud from "./components/LogoCloud";

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <Verdicts />
      <PracticeTypes />
      <FromOurClients />
      <OurAttorneys />
      <LogoCloud />
      <PracticeInfo />
    </div>
  );
}

export default App;
