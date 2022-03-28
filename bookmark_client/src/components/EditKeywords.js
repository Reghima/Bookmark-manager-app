import React, { useEffect, useState } from "react";
import { Tag } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "antd";
import isEmpty from "is-empty";

import { getBookmarkById, updateBookmark } from "../redux/actions/bookmarks";

function EditKeywords() {
  const { id } = useParams();
  const { bookmarkTags } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkById(id));
  }, [id, dispatch]);

  const [bookmarkTag, setBookmarkTag] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmpty(bookmarkTag) && bookmarkTags.indexOf(bookmarkTag) === -1) {
      dispatch(
        updateBookmark(id, { bookmarkTags: [...bookmarkTags, bookmarkTag] })
      );
      bookmarkTags.push(bookmarkTag);
      setBookmarkTag("");
    }
  };

  const handleClose = (removedTag) => {
    const removedKeyword = bookmarkTags.filter((tag) => tag !== removedTag);
    dispatch(updateBookmark(id, { bookmarkTags: removedKeyword }));
    bookmarkTags.slice(bookmarkTags.indexOf(removedTag));
  };
  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
      }}
    >
      <div>
        <h1 style={{ paddingTop: "7rem" }}>Mots Clés</h1>

        <Input.Group compact style={{ display: "flex" }}>
          <Input
            placeholder="Saisir un Mot Clé"
            onChange={(e) => setBookmarkTag(e.target.value)}
            value={bookmarkTag}
          />
          <Button type="primary" onClick={handleSubmit}>
            Ajouter
          </Button>
        </Input.Group>

        <div style={{ marginTop: "30px" }}>
          {bookmarkTags &&
            bookmarkTags.map((bookmarkTag) => (
              <Tag
                color="blue"
                key={bookmarkTag}
                closable
                onClose={(e) => handleClose(bookmarkTag)}
                style={{ margin: "2px" }}
              >
                {bookmarkTag}
              </Tag>
            ))}
        </div>
      </div>
    </div>
  );
}

export default EditKeywords;
