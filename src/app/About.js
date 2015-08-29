import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import {Link} from 'react-router-component'
 
class About extends Component {
  state = {
    title: 'About'
  }
  handleClick() {
    alert('hi! ' + this.state.title)
  }
  render() {
    return <DocumentTitle title={this.state.title}>
      <div className="container">
        <Link href="/">Home</Link>
        <Link href="/about"><b>About</b></Link>
        <button onClick={this.handleClick.bind(this)}>alert me!</button>
      </div>
    </DocumentTitle>
  }
}
 
export default About