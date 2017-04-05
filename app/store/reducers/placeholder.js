const initialState = {
  
}

export default (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'ADD_NEW_ITEM':
      const { placeholderId, placeholderData } = rest
      return {
        ...state,
        placeholderId: placeholderData
      }
    default:
      return state
  }
  return state
}