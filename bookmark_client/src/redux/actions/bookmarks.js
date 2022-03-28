import {
  GET_ALL_BOOKMARK,
  GET_ONE_BOOKMARK,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionsTypes";

import * as api from "../../api";

// GET ALL BOOKMARKS
export const getAllBookmarks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllBookmarks();

    dispatch({ type: GET_ALL_BOOKMARK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// GET BOOKMARK BY ID
export const getBookmarkById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchBookmarkById(id);
    dispatch({ type: GET_ONE_BOOKMARK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE BOOKMARK
export const createBookmark = (bookmark) => async (dispatch) => {
  try {
    const { data } = await api.createBookmark(bookmark);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE BOOKMARK
export const updateBookmark = (id, bookmark) => async (dispatch) => {
  try {
    const { data } = await api.updateBookmark(id, bookmark);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE BOOKMARK
export const deleteBookmark = (id) => async (dispatch) => {
  try {
    await api.deleteBookmark(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
