import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import About from './components/Pages/About';
import Books from './components/Pages/Books';
import Home from './components/Pages/Home';
import Thanks from './components/Pages/Thanks';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/thanks" component={Thanks} />
      <Route path="/about" component={About} />
      <Route path="/extras/books" component={Books} />
    </Route>
  </Router>,
  document.getElementById('root')
);
