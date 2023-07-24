import { createStore } from "redux";
import reducer from './reducers/reducer';

// Creating A Store
const store = createStore(reducer);

export default store;