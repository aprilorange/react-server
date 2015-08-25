import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import {Link} from 'react-router-component'

class Home extends Component {
  handleClick() {
    alert('hi!')
  }
  render() {
    return <DocumentTitle title="React Server">
      <div>
        <Link href="/"><b>Home</b></Link>
        <Link href="/about">About</Link>
        <button onClick={this.handleClick}>alert me!</button>
      </div>
    </DocumentTitle>
  }
}

export default Home