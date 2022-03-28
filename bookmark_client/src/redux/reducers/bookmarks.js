import {
  GET_ALL_BOOKMARK,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionsTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (bookmarks = [], action) => {
  switch (action.type) {
    case GET_ALL_BOOKMARK:
      return action.payload;
    case CREATE:
      return [...bookmarks, action.payload];
    case UPDATE:
      return bookmarks.map((bookmark) =>
        bookmark._id === action.payload._id ? action.payload : bookmark
      );
    case DELETE:
      return bookmarks.filter((bookmark) => bookmark._id !== action.payload);
    default:
      return bookmarks;
  }
};
