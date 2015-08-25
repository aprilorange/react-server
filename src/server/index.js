import express from 'express'
let app = express()
import bodyParser from 'body-parser'
import React from 'react'
import reactAsync from 'react-async'
import logger from 'morgan'
import {AppRoutes, DocumentTitle} from '../app'

import config from './config'

let server = (root) => {

  // define middlewares
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use('/static', express.static('build'))

  // define routers
  app.use((req, res, next) => {
    try {
      reactAsync.renderToStringAsync(<AppRoutes path={req.path}/>, (err, markup) => {
        if(err) {
          console.log(err)
          return next()
        }
        return res.send('<!DOCTYPE html>' + markup.replace(/__title-holder__/g, DocumentTitle.rewind()))
      })
    } 
    catch(e) {
      console.log(e)
      return next()
    }
  })

  // listen
  app.listen(config.port, () => {
    console.log('Site is running at http://localhost:' + config.port)
  })

}

export default server