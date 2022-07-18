import wordsForApp from "../data/wordsForApp"
const ADD_POST = "ADD_POST"


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })


const initialState = {
  wordsForApp: wordsForApp
}

const appReducer = (state = initialState, action) => {
  //console.log(action)
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: Date.now(),
        text: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
    }
    default:
      return state
  }
}

export default appReducer