const express = require("express");
const { bookmarkController } = require("../controllers");

const router = express.Router();

// ADD BOOKMARK ROUTE
router.post("/", bookmarkController.createBookmark);
// GET ALL BOOKMARKS ROUTE
router.get("/", bookmarkController.getAllBookmark);
// GET A BOOKMARK BY ID ROUTE
router.get("/:id", bookmarkController.getBookmarkById);
// UPDATE BOOKMARK
router.put("/:id", bookmarkController.updateBookmark);
// DELETE BOOKMARK BY ID
router.delete("/:id", bookmarkController.deleteBookmarkById);

module.exports = router;
