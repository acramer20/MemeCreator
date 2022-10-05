const DEFAULT_STATE = {
  memes: []
};

function rootReducer(state = DEFAULT_STATE, action) {
  if(action.type === "ADD_MEME"){
    return {...state, memes: [...state.memes, {...action.meme}]}
  }
  if(action.type === "DELETE_MEME"){
    console.log({...state, memes: state.memes.filter(m => m.id !== action.id)})
    return {...state, memes: state.memes.filter(m => m.id !== action.id)}
    
  }
  return state
}

export default rootReducer;

