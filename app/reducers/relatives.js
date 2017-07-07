const ADD_RELATIVE = 'add/Relative'
const REMOVE_RELATIVE = 'remove/Relative'

const addRelative = (relative) => ({type: ADD_RELATIVE, relative})
const removeRelative = (id) => ({type: REMOVE_RELATIVE, id})

export default (state = {}, {type, ...rest}) => {
  switch (type) {
    case ADD_RELATIVE:
      return {...state}
  
    default:
      break;
  }
}