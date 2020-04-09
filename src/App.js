import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

import Welcome from './Welcome'
import Article from './Article'

export default function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/Article/:article' component={Article} />
      </Switch>
    </Router>
  )
}