const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const post = require("../../../dbMockup/post");

/* 
POST post 
METHOD : POST
URI : http://localhost:5001/wesopt29-f91b0/asia-northeast3/api/post
RESPONSE BODY: title, content
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 생성한 post 정보
*/

module.exports = async (req, res) => {
  // request body에서 데이터 가져오기
  const { title, content } = req.body;

  // request body가 잘못되었을 때 - Null Value 반환
  if (!title || !content) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const newPost = {
    id: post.length + 1,
    title,
    content,
  };

  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.CREATED_POST, newPost));
};
