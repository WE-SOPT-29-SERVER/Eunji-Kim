const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const users = require("../../../dbMockup/user");

/* 

delete profile
METHOD: DELETE
URI: localhost:3000/user/profile/:id
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 삭제한 User를 제외한 모든 User 정보

*/

module.exports = async (req, res) => {
    // request params에서 데이터 가져오기
    const { id } = req.params;
  
    // request params가 잘못되었을 때 - Null Value 반환
    if (!id) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
  
    // 존재하는 유저인지 확인 - 없다면 No User 반환
    const existingUser = users.filter((obj) => obj.id === Number(id))[0];
  
    if (!existingUser) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
  
    const newUser = users.filter((obj) => obj.id !== Number(id));
  
    res
      .status(statusCode.OK)
      .send(
        util.success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, newUser)
      );
  };