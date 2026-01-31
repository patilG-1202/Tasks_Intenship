import { useState } from "react";

function ColorBox() {
  const colors = ["red", "blue", "green", "yellow"];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        onClick={changeColor}
        style={{
          width: "150px",
          height: "150px",
          margin: "auto",
          backgroundColor: colors[index],
          cursor: "pointer",
        }}
      ></div>

      <button onClick={changeColor} style={{ marginTop: "15px" }}>
        Change Colour
      </button>
    </div>
  );
}

export default ColorBox;
