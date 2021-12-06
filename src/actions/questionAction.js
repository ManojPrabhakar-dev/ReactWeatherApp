import { SCORE, QUESTION_INDEX, SETTINGS } from "../constants/reducerConstants";

export const updateScore = (_score) => async (dispatch) => {
  dispatch({
    type: SCORE,
    payload: {
      score: _score,
    },
  });
};

export const updateQuestionIndex = (_idx) => async (dispatch) => {
  dispatch({
    type: QUESTION_INDEX,
    payload: {
      questionIndex: _idx,
    },
  });
};

export const updateSettings =
  (category, difficulty, limit) => async (dispatch) => {
    dispatch({
      type: SETTINGS,
      payload: {
        category,
        difficulty,
        limit,
      },
    });
  };
