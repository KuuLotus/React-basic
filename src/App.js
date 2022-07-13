import { useEffect, useState, useContext } from "react";
import NaritaRyoContext from ".";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const naritaryoInfo = useContext(NaritaRyoContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{naritaryoInfo.name}</p>
      <p>{naritaryoInfo.age}</p>
    </div>
  );
}

export default App;
