import { useState } from "react";

const App: React.FC = () => {
  const colors: string[] = ["red", "blue", "green", "yellow", "purple"];
  const [colorIndex, setColorIndex] = useState<number>(0);

  const changeColor = (): void => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={styles.container}>
      <div
        style={{ ...styles.box, backgroundColor: colors[colorIndex] }}
        onClick={changeColor}
      ></div>

      <button onClick={changeColor} style={styles.button}>
        Change Color
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  box: {
    width: "150px",
    height: "150px",
    margin: "auto",
    cursor: "pointer",
  },
  button: {
    marginTop: "15px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
