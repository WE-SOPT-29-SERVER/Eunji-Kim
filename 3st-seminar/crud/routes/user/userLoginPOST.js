const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const users = require("../../../dbMockup/user");

/* 

login
METHOD: POST
URI: localhost:3000/user/login
REQUEST BODY: email, password
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 비밀번호를 제외한 User 정보

*/

module.exports = async (req, res) => {
  // request body에서 데이터 가져오기
  const { email, password } = req.body;

  // request data 확인 - 없다면 Null Value 반환
  if (!email || !password)
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

  // 존재하는 유저인지 확인 - 없다면 No user 반환
  const user = users.filter((user) => user.email === email)[0];

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
};
