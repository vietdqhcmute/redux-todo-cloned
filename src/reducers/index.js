import {
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FINISH_ADD_TASK,
  FINISH_FETCH_TASK,
} from "../actions/types";

const initialState = {
  tasks: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_FETCH_TASK: {
      return { ...state, tasks: action.payload };
    }
    case FINISH_ADD_TASK: {
      return { ...state, tasks: state.tasks.concat(action.payload) };
    }
    case COMPLETE_TASK: {
      const newState = { ...state };
      const completedTask = newState.tasks.find((e) => e.id === action.payload);
      completedTask.completed = !completedTask.completed;
      return newState;
    }
    case DELETE_TASK: {
      const newState = { ...state };
      const removeIndex = newState.tasks.findIndex(
        (item) => item.id === action.payload
      );
      newState.tasks.splice(removeIndex, 1);
      return newState;
    }
    case EDIT_TASK: {
      console.log("EDIT_TASK");
      return;
    }
    default:
      return state;
  }
};

export default rootReducer;
