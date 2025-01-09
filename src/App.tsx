import "./App.css";
import Card from "./components/card/Card";

function App() {
    return (
        <main className="game">
            <div className="opponent"></div>
            <div className="player">
                <div className="playerCardField"></div>
                <div className="playerCards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    );
}

export default App;
