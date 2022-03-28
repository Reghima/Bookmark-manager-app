import React from "react";
import moment from "moment";
import { Tag } from "antd";

function BookmarkData({
  bookmarkTitle,
  bookmarkAuthor,
  bookmarkHeight,
  bookmarkWidth,
  bookmarkTags,
  bookmarkAddedDate,
}) {
  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ width: `${bookmarkWidth}` }}>
        <span>{`L : ${bookmarkWidth} x H : ${bookmarkHeight}`}</span>
        <span>dd</span>
        <div style={{ margin: "10px 0" }}>
          {bookmarkTags &&
            bookmarkTags.map((bookmarkTag) => (
              <Tag color="blue" key={bookmarkTag} style={{ margin: "2px" }}>
                {bookmarkTag}
              </Tag>
            ))}
        </div>
      </div>
      <div>
        <h1>{bookmarkTitle}</h1>
        <h3>Auteur : {bookmarkAuthor}</h3>

        <span>
          {moment(bookmarkAddedDate).format("DD MMMM YYYY  h:mm:ss A")}
        </span>
      </div>
    </div>
  );
}

export default BookmarkData;
