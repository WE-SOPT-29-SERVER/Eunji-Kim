const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const users = require("../../../dbMockup/user");

/* 

get profile
METHOD: GET
URI: localhost:3000/user/profile/:id
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 비밀번호를 제외한 User 정보

*/

module.exports = async (req, res) => {
    // request params에서 데이터 가져오기
    const { id } = req.params;
  
    // request params가 잘못되었을 때
    if (!id) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
  
    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    const user = users.filter((obj) => obj.id === Number(id))[0];
  
    if (!user) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
  
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  
    // 성공 - login success와 함께 userId 반환
    res
      .status(statusCode.OK)
      .send(
        util.success(statusCode.OK, responseMessage.READ_PROFILE_SUCCESS, data)
      );
  };