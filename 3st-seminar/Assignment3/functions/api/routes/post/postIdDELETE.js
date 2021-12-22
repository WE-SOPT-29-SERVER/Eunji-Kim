const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const post = require("../../../dbMockup/post");

/* 
delete post 
METHOD : DELETE
URI : http://localhost:5001/wesopt29-f91b0/asia-northeast3/api/post/:id
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 삭제한 게시글을 제외한 모든 게시글 정보
*/

module.exports = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingPost = post.filter((obj) => obj.id === Number(id))[0];

  if (!existingPost) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
  }

  const newPost = post.filter((obj) => obj.id !== Number(id));

  res
    .status(statusCode.OK)
    .send(
      util.success(statusCode.OK, responseMessage.POST_DELETE_SUCCESS, newPost)
    );
};
