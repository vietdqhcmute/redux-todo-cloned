import {
  FINISH_COMPLETE_TASK,
  FINISH_DELETE_TASK,
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
    case FINISH_COMPLETE_TASK: {
      return { ...state, tasks: action.payload };
    }
    case FINISH_DELETE_TASK: {
      return { ...state, tasks: action.payload };
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
