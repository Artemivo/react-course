import { SELECT_GIST } from "../actions/action";

const initialState = null;

export default(state = initialState, action) => {
    if (action.type === SELECT_GIST) {
      return action.payload;
    }
    return state;
  }