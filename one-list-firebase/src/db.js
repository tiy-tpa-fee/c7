import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyArsPs6i7_irDrrtRUu7uB_Z0L_3UDdWnU',
  databaseURL: 'https://one-list-demo.firebaseio.com'
})

export default app.database()
