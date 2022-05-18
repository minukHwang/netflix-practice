import { combineReducers } from "redux";
import movieReducer from "./moverReducer";

export default combineReducers({
    movie:movieReducer,
    
});