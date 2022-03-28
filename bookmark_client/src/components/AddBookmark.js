import React, { useState } from "react";

import { Input, Button } from "antd";
import { useDispatch } from "react-redux";

import { createBookmark } from "../redux/actions/bookmarks";

function AddBookmark() {
  const [bookmarkData, setBookmarkData] = useState({ bookmarkUrl: "" });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createBookmark(bookmarkData));
    setBookmarkData("");
  };

  return (
    <div>
      <Input.Group compact style={{ display: "flex" }}>
        <Input
          placeholder="Saisir un lien Vimeo/Flickr"
          onChange={(e) => setBookmarkData({ bookmarkUrl: e.target.value })}
          value={bookmarkData.bookmarkUrl}
        />
        <Button type="primary" onClick={handleSubmit}>
          Ajouter
        </Button>
      </Input.Group>
    </div>
  );
}

export default AddBookmark;
