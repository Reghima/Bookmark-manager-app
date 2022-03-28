const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    urlType: { type: String },
    bookmarkId: { type: String },
    bookmarkUrl: { type: String, required: true },
    bookmarkTitle: { type: String },
    bookmarkAuthor: { type: String },
    bookmarkAddedDate: { type: String },
    bookmarkWidth: { type: Number },
    bookmarkHeight: { type: Number },
    bookmarkVideoDuration: { type: Number },
    bookmarkTags: { type: Array, default: [] },
  },
  { timestamps: true }
);

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
