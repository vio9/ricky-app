import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import CharsList from './components/CharsList';
import CharDetail from './components/CharDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/characters/:id" component={CharDetail} />
          <Route path="/characters" component={CharsList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}