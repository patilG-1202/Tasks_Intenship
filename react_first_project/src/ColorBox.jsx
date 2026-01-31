import { useState } from "react";

function ColorBox() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const [color, setColor] = useState("gray");
  const [count, setCount] = useState(0);

  const changeColor = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === color);

    setColor(newColor);
    setCount(count + 1);
  };

  const reset = () => {
    setColor("gray");
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        onClick={changeColor}
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: color,
          margin: "auto",
          cursor: "pointer",
          borderRadius: "20px",
          transition: "background-color 0.4s ease"
        }}
      ></div>

      <button onClick={changeColor} style={{ marginTop: "20px" }}>
        Change Color
      </button>

      <p>Color changed: {count} times</p>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ColorBox;
