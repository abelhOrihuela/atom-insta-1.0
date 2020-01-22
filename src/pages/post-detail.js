import React, { Component } from 'react'
import PostCard from '../components/post-card'
import Comment from '../components/comment'
import firebase from 'firebase'
import moment from 'moment'
moment.locale('es')

class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      loading: true,
      comments: []
    }
  }

  componentDidMount = () => {
    this.loadDetail()
    this.loadComments()
  }

  loadDetail = () => {
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props

    let postRef = firebase.database().ref(`posts/${id}`)
    postRef.once('value', (snapshot) => {
      this.setState({
        post: snapshot.val(),
        loading: false
      })
    })
  }

  loadComments = () => {
    let {
      match: {
        params: { id }
      }
    } = this.props
    firebase.database().ref(`postsComments/${id}`).on('value', (snapshot) => {


      let comments = snapshot.val()
      let newComments = []

      for (let comment in comments) {
        newComments.push({
          id: comment,
          userId: comments[comment].userId,
          content: comments[comment].content,
          createdAt: comments[comment].createdAt,
        })
      }

      this.setState({
        comments: newComments
      })
    })
  }

  render() {
    let {
      loading,
      post,
      comments
    } = this.state

    if (loading) {
      return <div
        className='is-vertical-center'
        style={{
          height: '90vh'
        }}>
        <p className="has-text-centered cursive-font">
          Cargando...
        </p>
      </div>
    }
    return (<div className="columns">
      <div className="column">
        <PostCard
          post={post}
          readOnly
        />
      </div>
      <div className="column">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">
              Comentarios
            </p>
          </div>

          <div className="card-content">
            {
              comments.map(c => {
                return (<Comment comment={c} />)
              })
            }
          </div>

        </div>
      </div>
    </div>)
  }
}

export default PostDetail