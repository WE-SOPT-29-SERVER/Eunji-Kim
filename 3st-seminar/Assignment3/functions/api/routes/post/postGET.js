const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const post = require("../../../dbMockup/post");

/* 
get all post
METHOD : GET
URI : http://localhost:5001/wesopt29-f91b0/asia-northeast3/api/post
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 모든 게시글 정보
*/

module.exports = async (req, res) => {
  const data = post;

  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.READ_POST_SUCCESS, data));
};
