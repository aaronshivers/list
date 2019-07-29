import database from '../db/firebase'

const listReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_LIST':
      return action.list
    case 'ADD_ITEM':
      return [ { item: action.item }, ...state ]
    case 'ADD_ITEM_TO_FIREBASE':
      console.log(state)
      return database
        .ref(`users/${ uid }/list`)
        .push(item)
    case 'REMOVE_ITEM':
      return state.filter(list => list.item !== action.item)
    default:
      return state
  }
}

export default listReducer
