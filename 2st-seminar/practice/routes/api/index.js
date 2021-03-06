const express = require("express"); // express 모듈 불러오기
const router = express.Router(); // Router() 미들웨어 불러오기

// GET method로 api/ 요청이 들어온다면
router.get("/", (req, res) => {
  // 해당 로직을 실행
  const result = {
    status: 200,
    message: "api~!",
  };

  // 우리가 반환해주는 response 객체
  res.status(200).send(result);
});

router.use("/blog", require("./blog"));
router.use("/users", require("./users"));

module.exports = router; // 생성한 router 객체를 모듈로 반환