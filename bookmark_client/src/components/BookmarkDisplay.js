import React from "react";

import BookmarkData from "./BookmarkData";

function BookmarkDisplay({
  bookmarkId,
  urlType,
  bookmarkUrl,
  bookmarkTitle,
  bookmarkAuthor,
  bookmarkHeight,
  bookmarkWidth,
  bookmarkTags,
  bookmarkAddedDate,
}) {
  return (
    <div>
      <div>
        {urlType === "video" ? (
          <iframe
            src={`https://player.vimeo.com/video/${bookmarkId}`}
            width={bookmarkWidth}
            height={bookmarkHeight}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={bookmarkTitle}
            style={{ maxHeight: "60vh", margin: "1rem" }}
          />
        ) : (
          <img
            src={bookmarkUrl}
            style={{ maxHeight: "60vh", margin: "1rem" }}
            alt={bookmarkTitle}
          />
        )}
      </div>
      <BookmarkData
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

export default BookmarkDisplay;
