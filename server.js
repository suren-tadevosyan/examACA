const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 5001;
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const existingData = await fs.readFile("users.json", "utf-8");
    const parsedData = JSON.parse(existingData);
    parsedData.push({ name, email });

    await fs.writeFile("users.json", JSON.stringify(parsedData));

    res.status(200).json({ success: true, user: { name, email } });
  } catch (error) {
    console.log("Error saving data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const existingData = await fs.readFile("users.json", "utf-8");
    const parsedData = JSON.parse(existingData);
    res.status(200).json({ success: true, users: parsedData });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
