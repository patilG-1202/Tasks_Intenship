import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/api/data", (req, res) => {
  console.log("BODY:", req.body);   // 🔴 important debug
  res.json({
    status: "success",
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
