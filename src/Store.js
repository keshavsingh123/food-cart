import { createStore } from "redux";
import rootReducer from "./redux/reducers/Main";

const store = createStore(rootReducer)

export default store