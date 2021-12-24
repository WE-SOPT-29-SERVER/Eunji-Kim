const express = require("express")
const router = express.Router();

router.get("/", require("./postGET"));
router.get("/:id", require("./postIdGET"));
router.post("/", require("./postPOST"));
router.delete("/:id", require("./postIdDELETE"));
router.put("/:id", require("./postIdPUT"));

module.exports = router;
