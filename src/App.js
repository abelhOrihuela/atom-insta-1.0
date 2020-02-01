import React, { Component } from 'react'
import firebase, { storage } from 'firebase'
import {
  BrowserRouter as Router, // Enrutador
  Switch, // navegación entre rutas
  Route, // ruta
} from 'react-router-dom'

// baobab

import { root } from 'baobab-react/higher-order'
import store from './tree'

// css
import 'bulma/css/bulma.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

// Components
import Layout from './components/layout'

// Pages
import Login from './pages/login'
import Home from './pages/home'
import PostDetail from './pages/post-detail'

// Setup firebase
let firebaseConfig = {
  apiKey: "AIzaSyChV8AOnUPkfGj1FFpVjIhnb8jT7byyFAc",
  authDomain: "atom-insta10.firebaseapp.com",
  databaseURL: "https://atom-insta10.firebaseio.com",
  projectId: "atom-insta10",
  storageBucket: "atom-insta10.appspot.com",
  messagingSenderId: "207336179354",
  appId: "1:207336179354:web:90259c37b5755e88ab8123",
  measurementId: "G-844694ZWG8"
}
firebase.initializeApp(firebaseConfig)

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <Router>
          <Layout>
            <Switch>
              {/* <Route
                path='/'
                exact
                component={Login}
              /> */}
              <Route
                path='/'
                exact
                component={Home}
              />
              <Route
                path='/posts/:id'
                component={PostDetail}
              />
            </Switch>
          </Layout>

        </Router>
    )
  }
}

const RootedApp = root(store, App)

export default RootedApp;
