
import { combineReducers} from "redux";
import UserReducer from "./pages/Redux/reducer";

const RootReducer = combineReducers({ UserReducer });

export default RootReducer;
