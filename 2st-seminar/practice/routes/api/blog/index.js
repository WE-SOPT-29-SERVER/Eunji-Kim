const express = require("express");
const router = express.Router();

// api/blog/post
router.get("/post", (req, res) => {
  const result = {
    status: 200,
    message: "'api/blog/post 만들기'",
  };
  res.status(200), send(result);
});

module.exports = router;
