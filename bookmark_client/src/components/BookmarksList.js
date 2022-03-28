import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";

import { columns } from "../helper/helper";
import { useDispatch } from "react-redux";

import { deleteBookmark, getAllBookmarks } from "../redux/actions/bookmarks";

const BookmarksList = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookmarks());
  }, [dispatch, bookmarks]);

  const deleteOneBookmark = (id) => {
    dispatch(deleteBookmark(id));
  };

  return (
    <div>
      <Table
        rowKey={(bookmark) => bookmark._id}
        columns={columns(deleteOneBookmark)}
        dataSource={bookmarks}
        style={{ marginTop: "30px" }}
        bordered
      />
    </div>
  );
};

export default BookmarksList;
