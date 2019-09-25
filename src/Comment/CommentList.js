import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  // 默认props
  static defaultProps = {
    comments: []  
  }

  delComment(i) {
    this.props.delComment(i)
  }

  render() {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]
    return (
      <div>
        {
          this.props.comments.map((comment, i) => {
            return (
              <Comment comment={comment} key={i} delComment={this.delComment.bind(this, i)} />
            )
          })
        }
      </div>
    )
  }
}

export default CommentList