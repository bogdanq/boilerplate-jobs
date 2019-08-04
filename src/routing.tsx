import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from './lib/history'
import { Home } from './views/home'

const SettingsPage = () => <div />

const routing = [
  { path: '/', component: Home },
  { path: '/settings', component: SettingsPage },
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
