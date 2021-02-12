export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const FETCH_DELETE_COMMENT = "FETCH_DELETE_COMMENT";
export const FETCH_ADD_COMMENT = "FETCH_ADD_COMMENT";
export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}

export function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
}

export function editComment(commentId) {
  return {
    type: EDIT_COMMENT,
    payload: commentId,
  };
}

export function fetchDeleteComment(commentId) {
  return {
    type: FETCH_DELETE_COMMENT,
    payload: commentId,
  };
}

export function fetchAddComment(comment) {
  return{
    type : FETCH_ADD_COMMENT,
    payload : comment,
  }
  
}