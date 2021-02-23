import apiClient from "../API";


export const FETCH_GISTS_PENDING = 'FETCH_GISTS_PENDING';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_ERROR = 'FETCH_GISTS_ERROR';
export const SELECT_GIST = 'SELECT_GIST';



export const fetchAddGists = path => (dispatch, getState) => {
  dispatch({
    type: FETCH_GISTS_PENDING
  });
  apiClient
  .get(path)
    .then(response => {
      dispatch({
        type: FETCH_GISTS_SUCCESS,
        payload: response.data
      })
    })
    .catch(err => dispatch({
      type: FETCH_GISTS_ERROR,
      payload: err.message
    }))
};

export function selectGist (gist){
  return {
    type : SELECT_GIST,
    payload : gist,
  };
}


