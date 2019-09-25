import React, { Component } from 'react'

class Header extends Component {
  constructor() {
    super()
    console.log('---- constructor ---')
  }

  componentWillMount() {
    console.log('----- componentWillMount ---')
  }

  componentDidMount() {
    console.log('---- componentDidMount ----')
  }

  componentWillUnmount() {
    console.log('---- componentWillUnmount ----')
  }


  render() {
    console.log(' ---- render ---')
    return (
      <div>
        <h1 className="title">React 小书</h1>
      </div>
    )
  }
}

export default Header