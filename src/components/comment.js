import React, { Component } from "react"
import firebase from "firebase"
import moment from "moment"

class Comment extends Component {
  state = {
    author: null
  }
  componentDidMount = () => {
    this.loadAuthor()
  }

  loadAuthor = () => {
    let {
      comment
    } = this.props

    console.log('comment', comment)

    let authorRef = firebase.database().ref(`users/${comment.userId}`)

    authorRef.once('value', (snapshot) => {
      this.setState({
        author: snapshot.val(),
        loading: false
      })
    })
  }
  render () {
    let {
      comment
    } = this.props

    let {
      author

    } = this.state

    if (!author) return <div>
      Loading ...
    </div>

    return (
      <article class="media">
        <figure class="media-left">
          <p class="image is-48x48">
            <img className="is-rounded" src={author.photoURL} />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{author.displayName}</strong> <small>{
                moment(comment.createdAt).fromNow().toString()
              }</small>
              <br />
              <br />
              {
                comment.content
              }
            </p>
          </div>
        </div>
      </article>
    )
  }
}

export default Comment