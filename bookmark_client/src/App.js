import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookmarkDetails from "./pages/BookmarkDetails";
import EditBookmark from "./pages/EditBookmark";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark-details/:id" element={<BookmarkDetails />} />
          <Route path="/bookmark-edit/:id" element={<EditBookmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
