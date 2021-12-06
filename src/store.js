import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { questionReducer, settingReducer } from "./reducers/questionReducer";

const reducers = combineReducers({
  question: questionReducer,
  setting: settingReducer,
});

const middleware = [thunk];

const initialState = {
  question: {
    score: 0,
    questionIndex: 0,
  },
  setting: {
    category: "",
    difficulty: "",
    limit: 10,
  },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
