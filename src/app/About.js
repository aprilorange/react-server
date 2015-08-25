import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import {Link} from 'react-router-component'

class About extends Component {
  render() {
    return <DocumentTitle title="About">
      <div>
        <Link href="/">Home</Link>
        <Link href="/about"><b>About</b></Link>
      </div>
    </DocumentTitle>
  }
}

export default About