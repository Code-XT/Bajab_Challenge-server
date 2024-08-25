const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*", //all domain access **for developement only**
  })
);
app.use(bodyParser.json());

// POST /bfhl endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  let numbers = [];
  let alphabets = [];
  let highestLowercase = "";

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === "string") {
      alphabets.push(item);
      if (item === item.toLowerCase() && item > highestLowercase) {
        highestLowercase = item;
      }
    }
  });

  res.json({
    is_success: true,
    user_id: "rahul_jha_27112001",
    email: "rahuljhabokaro123@gmail.com",
    roll_number: "21BCE11420",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
  });
});

// GET /bfhl endpoint
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
