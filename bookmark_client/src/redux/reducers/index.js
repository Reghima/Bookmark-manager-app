import { combineReducers } from "redux";

import bookmarks from "./bookmarks";
import bookmark from "./bookmark";

export const reducers = combineReducers({ bookmarks, bookmark });
