import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Users from './pages/User/Users'
import NotFound from './pages/NotFound/NotFound'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from 'redux-starter-kit'
import rootReducer from './redux/reducers'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const store = configureStore({
  reducer: rootReducer
})

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar>
          <Navbar.Brand as={Link} to='/' >Welcome!</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className='mr-auto'>
              <NavItem>
                <Nav.Link as={Link} to='/' >Home</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to='/users' >Users</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/users' component={Users} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
