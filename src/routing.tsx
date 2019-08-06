import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from './lib/history'
import { Home, Jobs, Summary, Private } from './views'

const SettingsPage = () => <div />

const routing = [
  { path: '/', component: Home },
  { path: '/settings', component: SettingsPage },
  { path: '/jobs', component: Jobs },
  { path: '/summary', component: Summary },
  { path: '/private', component: Private },
]

const RoutesWithSession = () => (
  <>
    {routing.map(route => (
      <Route
        exact
        key={route.path}
        path={route.path}
        component={route.component}
      />
    ))}
  </>
)

export const Routing = () => (
  <Router history={history}>
    <Switch>
      <RoutesWithSession />
    </Switch>
  </Router>
)
