import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogsReduser ";
import friendsReduser from "./friendsReduser ";
import profileReduser from "./profileReduser";

let reducers = combineReducers({
    profilePage :profileReduser,
    dialogsPage :dialogsReduser,
    friendsPage :friendsReduser,
});

let store = createStore(reducers);

export default store;