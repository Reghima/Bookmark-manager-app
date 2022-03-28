import axios from "axios";

const url = "http://localhost:5000/bookmarks";

export const createBookmark = (newBookmark) => axios.post(url, newBookmark);
export const fetchAllBookmarks = () => axios.get(url);
export const fetchBookmarkById = (id) => axios.get(`${url}/${id}`);
export const updateBookmark = (id, updatedBookmark) =>
  axios.put(`${url}/${id}`, updatedBookmark);
export const deleteBookmark = (id) => axios.delete(`${url}/${id}`);
