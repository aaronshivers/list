const DB_NAME = 'todo-db'
const DB_VERSION = 4
const DB_STORE_NAME = 'publications'

export default (() => {

  // Check for IndexedDB Support
  if (!indexedDB) {
    console.log(`This browser doesn't support IndexedDB`)
    return
  }

  // Initialize the DB
  let db

  // Open the DB
  const request = indexedDB.open(DB_NAME, DB_VERSION)

  // Log Error Messages
  request.onerror = event => {
    console.error('DB ERROR: ' + event.target.errorCode)
  }

  request.onsuccess = event => db = event.target.result

  request.onupgradeneeded = event => {

    const store = event
      .currentTarget
      .result
      .createObjectStore(DB_STORE_NAME, { keyPath: 'id', autoIncrement: true })

    store.createIndex('bibliod', 'bibliod', { unique: true })
    store.createIndex('title', 'title', { unique: false })
    store.createIndex('year', 'year', { unique: false })
  }

  const getObjectStore = (store_name, mode) => {
    const tx = db.transaction(store_name, mode)
    return tx.objectStore(store_name)
  }

})()

