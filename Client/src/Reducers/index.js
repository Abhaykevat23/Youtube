import {combineReducers} from "redux"
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import chanelReducers from "./chanel";
import videoReducer from "./Video";
import likeVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import HistoryReducer from "./History";
import commentReducer from "./comments";

export default combineReducers({ 
    authReducer,
    currentUserReducer,
    chanelReducers,
    videoReducer,
    likeVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer,
});
