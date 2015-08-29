import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import {Link} from 'react-router-component'
 
class Home extends Component {
  state = {
    title: 'Index'
  }
  handleClick() {
    alert('hi! ' + this.state.title)
  }
  render() {
    return <DocumentTitle title={this.state.title}>
      <div className="container">
        <Link href="/"><b>Home</b></Link>
        <Link href="/about">About</Link>
        <button onClick={this.handleClick.bind(this)}>alert me!</button>
      </div>
    </DocumentTitle>
  }
}
 
export default Home