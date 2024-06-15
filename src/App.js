import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, []);

  const onClouse = () => {
    tg.close()
  }

  return (
    <div className="App">
      <button onClick={onClouse}>Закрыть</button>
    </div>
  );
}

export default App;
