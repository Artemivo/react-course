import { FETCH_GISTS_PENDING,FETCH_GISTS_SUCCESS,FETCH_GISTS_ERROR } from "../actions/action";

const initialState = {
  error: null,
  loading: false,
  list: []
};
export default  (state = initialState , action) => {
  switch(action.type) {
    case FETCH_GISTS_PENDING: return { ...state, loading: true };
    case FETCH_GISTS_SUCCESS: return { loading: false, err: null, list: action.payload };
    case FETCH_GISTS_ERROR: return { ...state, loading: false, err: action.payload };
    default: return state;
  }
};



