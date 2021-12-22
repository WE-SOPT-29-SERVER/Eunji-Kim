const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const users = require("../../../dbMockup/user");

/* 

update profile
METHOD: PUT
URI: localhost:3000/user/profile/:id
REQUEST BODY: name
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 업데이트한 User 정보

*/

module.exports = async (req, res) => {
    // request params에서 데이터 가져오기
    const { id } = req.params;
    // request body에서 데이터 가져오기
    const { name: newName } = req.body;
  
    // request params 또는 request body가 잘못되었을 때 - Null Value 반환
    if (!id || !newName) {
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
  
    // 유저 정보 업데이트 하기
    const updatedUser = { ...existingUser, name: newName };
  
    res
      .status(statusCode.OK)
      .send(
        util.success(
          statusCode.OK,
          responseMessage.USER_UPDATE_SUCCESS,
          updatedUser
        )
      );
  };