import React, { Component } from "react"
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentAPP extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  // 评论提交
  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  // 删除评论 
  delComment(i) {
    this.state.comments.splice(i, 1)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} delComment={this.delComment.bind(this)} />
      </div>
    )
  }
}

export default CommentAPP