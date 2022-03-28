import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";

import { getBookmarkById } from "../redux/actions/bookmarks";

import BookmarkDisplay from "../components/BookmarkDisplay";

function BookmarkDetails() {
  const { id } = useParams();

  const {
    bookmarkId,
    urlType,
    bookmarkTitle,
    bookmarkAuthor,
    bookmarkHeight,
    bookmarkWidth,
    bookmarkTags,
    bookmarkAddedDate,
    bookmarkUrl,
  } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkById(id));
  }, [id, dispatch]);

  return (
    <div>
      <Helmet>
        <title>Détails du bookmark</title>
      </Helmet>
      <BookmarkDisplay
        bookmarkId={bookmarkId}
        urlType={urlType}
        bookmarkUrl={bookmarkUrl}
        bookmarkTitle={bookmarkTitle}
        bookmarkAuthor={bookmarkAuthor}
        bookmarkHeight={bookmarkHeight}
        bookmarkWidth={bookmarkWidth}
        bookmarkTags={bookmarkTags}
        bookmarkAddedDate={bookmarkAddedDate}
      />
    </div>
  );
}

export default BookmarkDetails;
