const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const post = require("../../../dbMockup/post");

/* 
update post
METHOD : PUT
URI : http://localhost:5001/wesopt29-f91b0/asia-northeast3/api/post/:id
RESPONSE BODY : title, content
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : id에 해당하는 게시글의 업데이트 정보
*/

module.exports = async (req, res) => {
  const { id } = req.params;
  const { title: newTitle, content: newContent } = req.body;

  if (!id || !newTitle || !newContent) {
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

  const newPost = { ...existingPost, title: newTitle, content: newContent };

  res
    .status(statusCode.OK)
    .send(
      util.success(statusCode.OK, responseMessage.POST_UPDATE_SUCCESS, newPost)
    );
};
