import { useContext } from 'react'
import database from '../db/firebase'
import UserContext from '../context/user-context'
import listReducer from '../reducers/list'

export const addItem = item => ({ type: 'ADD_ITEM_TO_FIREBASE', item })

export const startAddItem = (itemData = {}) => {
  const [ list, dispatch ] = useReducer(listReducer, [])
  const { uid } = useContext(UserContext)

console.log(itemData)

  const {
    text,
    createdAt = Date.now()
  } = itemData

  const item = { text, createdAt }


  // return database
  //   .ref(`users/${ uid }/list`)
  //   .push(item)
  //   .then(ref => dispatch({
  //     type: 'ADD_ITEM_TO_FIREBASE',
  //     item,
  //     id: ref.key
  //   }))
}