const express = require("express");
const router = express.Router();
const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

const users = require("../../dbMockup/user");

//  /user/signup
//어떤 req를 받아서 어떤 res를 전달할지
router.post("/signup", (req, res) => {
  // 클라이언트에서 email, password, name을 req body에 담아서 보내줌
  // 이 데이터에 접근
  //   const email = req.body.email;
  //   const name = req.body.name;
  //   const password = req.body.password;

  // destructuring assignment
  // 비구조화 할당
  // body라는 객체를 분해하는 할당 방법.
  const { email, name, password } = req.body;

  // 이름 지정하고 싶을 때는 이렇게
  //   const myEmail = req.body.email;
  //   const myName = req.body.name;
  //   const myPassword = req.body.password;
  //   const { email: myEmail, name: myName, password: myPassword } = req.body;

  //   //클라에서 보내준 데이터를 바탕으로 newUser라는 객체를 생성
  //   const newUser = {
  //     //db를 다루게 되면 보통 id를 이렇게 따로 선언해 주지 않아도 된다.
  //     //db에서 알아서 id를 부여함
  //     id: users.length + 1,
  //     name: name,
  //     passowrd: password,
  //     email: email,
  //   };

  // 자바스크립트에서 객체를 생성할 때 key와 value의 이름이 같으면 value를 생략해도 된다.
  const newUser = {
    id: users.length + 1,
    name,
    password,
    email,
  };

  // [비구조화 할당]과 [key와 value가 같을 때 생략하는 방법]으로 코딩하는게 보편적(?)

  // request body가 잘못됐을 때
  // if (!email || !name || !password) {
  //   return res.status(400).send(util.fail(400, "BAD REQUEST"));
  // }

  if (!email || !name || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // !email은 어떤경우?
  //   {email: ''}
  //   {email: null}

  // 해당 email을 가진 유저가 이미 있을 때
  // user라는 배열 안에 들어있는 요소 안에 조건을 통과하는 요소들만 배열로 반환.
  const alreadyUser = users.filter((obj) => obj.email === email).length > 0;

  // user가 이미 존재하는 경우
  // error code 409 : conflict 이미 있는 데이터와 충돌.
  // if (alreadyUser) {
  //   return res.status(409).send({ status: 409, message: "ALREADY EMAIL" });
  // }

  if (alreadyUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
  }

  //response 객체에 생성 결과를 보내줌
  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));
});

router.post("/login", async (req, res) => {
  // request body에서 데이터 가져오기
  const { email, password } = req.body;

  // request data 확인 - 없다면 Null Value 반환
  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 존재하는 유저인지 확인 - 없다면 No user 반환
  const user = users.filter((obj) => obj.email === email)[0];

  if (!user) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  // 비밀번호 확인 - 틀렸다면 Missmatch password 반환
  if (user.password !== password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }

  // 성공 - login success와 함께 비밀번호를 제외한 유저 정보 반환
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  );
});

// params : ':id'
// router.get("/:id", (req, res) => {});
// router.put("/:id", (req, res) => {});
// router.delete("/:id", (req, res) => {});

// query: /user?age=30
// param: /user/4

module.exports = router;
