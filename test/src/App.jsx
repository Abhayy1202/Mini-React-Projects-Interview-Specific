import { useState ,useEffect} from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isStart, setStart] = useState(false);
  const handleToggle = () => {
    setStart((prev) => !prev);
  };

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isStart]);

  return (
    <>
      <button onClick={handleToggle}>{isStart ? "Stop" : "Start"}</button>
      <div>counter is :{count}</div>
    </>
  );
}

export default App;

// Show a button that will show start label on click it should show stop, viceversa show a counter with 0,
//  after clicking start it should increment the counter by 1 every one second,
//  on click of stop it should stop the counter and resume again where it was stopped previously.
