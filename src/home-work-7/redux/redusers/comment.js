import {ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, FETCH_DELETE_COMMENT, FETCH_ADD_COMMENT} from '../actions/actions';

let initialState = [];

export default (state = initialState , action) =>{

    let newComments;
    switch (action.type) {
        case ADD_COMMENT:{
            const newComment = action.payload;
            if(newComment.title ==="" || newComment.text===""){
                alert('write your comment')
            }return [...state, {id:newComment.id, title: newComment.title, text: newComment.text, date:newComment.date }]

        }
        case DELETE_COMMENT:{
            const commentId = action.payload;
            return state.filter(findComment => commentId !== findComment.id)
        }
        case EDIT_COMMENT :{
            newComments = [...state];
            let index = -1;
            for (let i = 0; i < newComments.length; i++) {
              index++;
              if (newComments[i].id == action.payload.id) {
                break;
              }
            }
            if (index != -1) {
                newComments[index] = action.payload;
              return newComments;
            }
        }
        case FETCH_DELETE_COMMENT:{
            const commentId = action.payload;
            return state.filter(findComment => commentId !== findComment.id)
        }
        case FETCH_ADD_COMMENT :{
            const fetchComments = action.payload;
            
            return fetchComments;

        }
    
        default: return state;
    }
}