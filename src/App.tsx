import "./App.css";
import Card from "./components/card/Card";

function App() {
    return (
        <main className="game">
            <h1>GAME</h1>
            <div className="opponent"></div>
            <div className="player">
                <Card />
            </div>
        </main>
    );
}

export default App;
