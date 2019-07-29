const listReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_LIST':
      return action.list
    case 'ADD_ITEM':
      return [ { item: action.item }, ...state ]
    case 'REMOVE_ITEM':
      return state.filter(list => list.item !== action.item)
    default:
      return state
  }
}

export default listReducer