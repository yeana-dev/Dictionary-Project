import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        <a
          href="https://github.com/yeana-dev/dictionary-project"
          target="__blank"
        >
          Open-sourced code
        </a>{" "}
        by Yeana Cho 🌸
      </footer>
    </div>
  );
}

export default App;
