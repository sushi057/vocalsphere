import "./styles/App.css";
import Header from "./components/Header";
import VoiceBox from "./components/VoiceBox";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-row">
        <VoiceBox />
        <TextBox />
      </div>
    </div>
  );
}

export default App;
