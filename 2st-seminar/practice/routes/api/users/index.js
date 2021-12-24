const express = require("express"); 
const router = express.Router();

router.post("/login", (req, res) => {
  const result = {
    status: 200,
    message: "'api/users/login' 만들기",
  };
  res.status(200), send(result);
});

router.post("/signup", (req, res) => {
  const result = {
    status: 200,
    message: "'api/users/signup' 만들기",
  };
  res.status(200), send(result);
});

module.exports = router; 