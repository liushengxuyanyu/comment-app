import React, { Component } from 'react'
import Header from './Header'

class Index extends Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true
    }
  }

  render() {
    return (
      <div>
        { this.state.isShowHeader ? <Header /> : null }
        <button>显示或者隐藏标题</button>
      </div>
    )
  }
}

export default Index