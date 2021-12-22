const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const users = require("../../../dbMockup/user");

/* 

sign up
METHOD: POST
URI: http://localhost:5001/wesopt29-f91b0/asia-northeast3/api/user/signup
REQUEST BODY: email, name, password
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 모든 User 정보

*/

module.exports = async (req, res) => {
    // destructuring assignment
    // 비구조화 할당
    const { email, name, password } = req.body;

    // request body가 잘못됐을 때
    if (!email || !name || !password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    // 해당 email을 가진 유저가 이미 있을 때
    const alreadyUser = users.filter(obj => obj.email === email).length > 0;
    if (alreadyUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.ALREADY_EMAIL,
                ),
            );
    }

    const newUser = {
        id: users.length + 1,
        name,
        password,
        email,
    };

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.CREATED_USER, newUser),
    );
};