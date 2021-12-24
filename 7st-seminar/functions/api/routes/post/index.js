const express = require("express");
const { checkUser } = require("../../../middlewares/auth");
const router = express.Router();

const uploadImage = require("../../../middlewares/uploadImage");

router.get("/list", require("./postListGET"));
router.get("/:postId", checkUser, require("./postGET"));

router.post("/", uploadImage, require("./postPOST"));

router.put("/:postId", require("./postPUT"));

router.delete("/:postId", require("./postDELETE"));

module.exports = router;
