const charactersReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_CHARACTERS':
      return [...state, ...action.characters]
    default:
      return state
  }
}

export default charactersReducer