import React, { Component } from 'react'
import Navbar from './navbar'
import { ToastContainer } from 'react-toastify'
import tree from '../tree'

class Layout extends Component {
  render() {
    let user = tree.get("user")

    if (!user) {
      
    }
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
