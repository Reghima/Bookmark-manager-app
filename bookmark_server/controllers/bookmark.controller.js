const { Bookmark } = require("../models");
const { extract } = require("oembed-parser/dist/cjs/oembed-parser.js");

//CREATE A BOOKMARK CONTROLLER
const createBookmark = async (req, res) => {
  try {
    extract(req.body.bookmarkUrl)
      .then(async (oembed) => {
        if (
          oembed.provider_url === "https://vimeo.com/" ||
          oembed.provider_url === "https://www.flickr.com/"
        ) {
          if (oembed.type === "video") {
            const bookmarkVideoDetails = {
              urlType: oembed.type,
              bookmarkId: oembed.video_id,
              bookmarkUrl: oembed.provider_url,
              bookmarkTitle: oembed.title,
              bookmarkAuthor: oembed.author_name,
              bookmarkAddedDate: oembed.upload_date,
              bookmarkWidth: oembed.width,
              bookmarkHeight: oembed.height,
              bookmarkVideoDuration: oembed.duration,
              bookmarkTags: [],
            };
            const bookmark = await Bookmark.create(bookmarkVideoDetails);
            res.status(201).send(bookmark);
          }
          if (oembed.type === "photo") {
            const bookmarkPhotoDetails = {
              urlType: oembed.type,
              bookmarkId: oembed.video_id,
              bookmarkUrl: oembed.url,
              bookmarkTitle: oembed.title,
              bookmarkAuthor: oembed.author_name,
              bookmarkAddedDate: oembed.upload_date,
              bookmarkWidth: oembed.width,
              bookmarkHeight: oembed.height,
              bookmarkTags: [],
            };
            const bookmark = await Bookmark.create(bookmarkPhotoDetails);
            res.status(201).send(bookmark);
          }
        }
      })
      .catch((err) => {
        console.trace(err);
      });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error,
    });
  }
};

//GET ALL BOOKMARKS CONTROLLER
const getAllBookmark = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find().sort({ _id: -1 });
    res.send(bookmarks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

//GET BOOKMARK BY ID CONTROLLER
const getBookmarkById = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) {
      return res.status(404).json({ message: "Bookmark not found" });
    }
    res.send(bookmark);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

// UPDATE BOOKMARK CONTROLLER
const updateBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);

    if (!bookmark) {
      res.status(404).json({ message: "Bookmark not found" });
    }
    Object.assign(bookmark, req.body);
    await bookmark.save();

    return res.send(bookmark);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

// DELETE BOOKMARK CONTROLLER
const deleteBookmarkById = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    await bookmark.remove();
    if (!bookmark) {
      return res.status(404).json({ message: "Bookmark not found" });
    }
    return res.status(200).send(bookmark);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

module.exports = {
  createBookmark,
  getAllBookmark,
  getBookmarkById,
  updateBookmark,
  deleteBookmarkById,
};
