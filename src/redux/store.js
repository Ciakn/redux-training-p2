import cakeReducer from "./Cake/CakeReducer";
import { createStore } from "redux";
const store = createStore(cakeReducer);
export default store;