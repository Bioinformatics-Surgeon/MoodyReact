import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './components/HomePage/HomePage';
import SearchPage from './components/SearchPage/SearchPage';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';
import Error from './components/Error/Error';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <CssBaseline />
      <ButtonAppBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
