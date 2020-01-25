import React, { Component } from 'react'
import Navbar from './navbar'
import { ToastContainer } from 'react-toastify'
import tree from '../tree'
import { Redirect } from 'react-router-dom'

class Layout extends Component {
  render() {
    let user = tree.get("user")
    return (
      <div>
        <ToastContainer />
        <Navbar />
        <div className="container">
          <div className="section">
            {
              this.props.children
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
