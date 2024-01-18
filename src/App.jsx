import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="envelope"></div>

      <div className="card">
        <div className="back"></div>
        <div className="front">
          <div className="f-box">
            <span className="text-on-image">Click to open me</span>
            <img src="https://assets.codepen.io/4927073/ValCard.png" alt="" />
          </div>
        </div>

        <div className="text-container">
          <p>
            If I have to do this life thing again
            <br />
            Thrown in the cosmic blender <br />
            and spat right back out <br />
            In every universe
            <br />
            In every timeline
            <br />
            I will look for you first <br />
            and joyfully bask in the many different ways <br />I fall in love
            with you ❤️
          </p>
        </div>
        <div className="sign">
          <p>ET</p>
        </div>
      </div>
    </>
  );
}

export default App;
