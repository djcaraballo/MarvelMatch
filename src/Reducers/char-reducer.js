const charactersReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_CHARS':
      return [...state, ...action.characters]
    default:
      return state
  }
}

export default charactersReducer