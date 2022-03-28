import { GET_ONE_BOOKMARK } from "../constants/actionsTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (bookmark = [], action) => {
  switch (action.type) {
    case GET_ONE_BOOKMARK:
      return action.payload;
    default:
      return bookmark;
  }
};
