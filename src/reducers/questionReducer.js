import { SETTINGS, SCORE, QUESTION_INDEX } from "../constants/reducerConstants";

export const settingReducer = (
  state = {
    category: "All",
    difficulty: "All",
    limit: 10,
  },
  action
) => {
  switch (action.type) {
    case SETTINGS:
      let newState = { ...state, ...action.payload };
      return newState;
    default:
      return state;
  }
};

export const questionReducer = (
  state = {
    score: 0,
    questionIndex: 0,
  },
  action
) => {
  switch (action.type) {
    case SCORE:
    case QUESTION_INDEX:
      let newState = { ...state, ...action.payload };
      return newState;
    default:
      return state;
  }
};
