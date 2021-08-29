import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PeoplePage } from './components/PeoplePage';
import { MainNavigation } from './components/MainNavigation';
import { NotFoundPage } from './components/NotFoundPage';

import './App.scss';

export const App = () => (
  <div className="App">
    <header>
      <MainNavigation />
    </header>

    <Switch>
      <Route path="/people">
        <h1 className="title">People Table</h1>
        <PeoplePage />
      </Route>
      <Route path="/" exact>
        <h1 className="title">Home page</h1>
      </Route>

      <Redirect path="/home" to="/" />

      <NotFoundPage />
    </Switch>
  </div>
);
