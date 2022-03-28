const express = require("express");
const bookmarkRoute = require("./bookmark.route");

const router = express.Router();

router.use("/bookmarks", bookmarkRoute);

module.exports = router;
