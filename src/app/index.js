import React, {Component} from 'react/addons'
import DocumentTitle from 'react-document-title'
import reactAsync from 'react-async'
import Router, {Location, Locations, Link} from 'react-router-component'
import CaptureClicks from 'react-router-component/lib/CaptureClicks'

// import views
import Home from './Home'
import About from './About'

class App extends Component {
  render() {
    return <html>
      <head>
        <title>__title-holder__</title>
      </head>
      <body>
        <h1>__title-holder__</h1>
        <DocumentTitle title="__title-holder__">
        <CaptureClicks>
          <Locations ref="router" path={this.props.path}>
            <Location path="/" handler={Home} />
            <Location path="/about" handler={About} />
          </Locations>
        </CaptureClicks>
        </DocumentTitle>
        <script src="/static/js/bundle.js"></script>
      </body>
    </html>
  }
}

export default {
  AppRoutes: App,
  DocumentTitle: DocumentTitle
}

// Bootstrap client in browsers
if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(<App/>, document)
    console.log('hi browser!')
  }
}
console.log('browserisokay')