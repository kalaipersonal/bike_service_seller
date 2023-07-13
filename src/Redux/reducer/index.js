import { combineReducers } from "redux";
import reducer from "./login_reducer/login_reducer";



const RootReducer = combineReducers({
    users: reducer,

});


export default RootReducer;