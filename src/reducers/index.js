import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FINISH_FETCH_TASK,
} from "../actions/types";
import { nanoid } from "nanoid";

const initialState = {
  tasks: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_FETCH_TASK: {
      return { ...state, tasks: action.payload };
    }
    case ADD_TASK: {
      const newTask = {
        id: "todo-" + nanoid(),
        title: action.payload,
        completed: false,
      };
      return { ...state, tasks: state.tasks.concat(newTask) };
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
