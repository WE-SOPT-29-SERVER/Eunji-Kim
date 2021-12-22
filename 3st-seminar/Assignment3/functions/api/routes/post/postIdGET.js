const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const post = require("../../../dbMockup/post");

/* 
get post by id
METHOD : GET
URI : http://localhost:5001/wesopt29-f91b0/asia-northeast3/api/post/:id
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 해당 id에 해당하는 게시글 정보
*/

module.exports = async (req, res) => {
  // request params에서 데이터 가져오기.
  const { id } = req.params;

  // request params 값이 잘못되었을 때 - Null Value 반환
  if (!id) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 존재하는 게시글인지 확인 - 없다면 No Post 반환
  const data = post.filter((obj) => obj.id == Number(id))[0];

  if(!data) {
    return res
    .status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
  }

  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.READ_POST_SUCCESS, data));
};
