const express = require("express");
const { checkUser } = require("../../../middlewares/auth");
const router = express.Router();

router.get("/list", require("./postListGET"));
router.post("/", require("./postPOST"));

router.get("/:postId", checkUser, require("./postGET"));
router.put("/:postId", require("./postPUT"));
router.delete("/:postId", require("./postDELETE"));

module.exports = router;
