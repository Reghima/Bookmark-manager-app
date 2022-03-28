import React from "react";
import { Helmet } from "react-helmet";

import AddBookmark from "../components/AddBookmark";
import BookmarksList from "../components/BookmarksList";

function Home() {
  return (
    <div style={{ width: "95%", margin: "20px auto" }}>
      <Helmet>
        <title>App de Gestion de bookmarks</title>
      </Helmet>

      <h1>Application de Gestion de bookmarks</h1>
      <AddBookmark />
      <BookmarksList />
    </div>
  );
}

export default Home;
