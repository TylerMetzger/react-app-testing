import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import Landing from "./views/Landing/Landing.js";
import Login from "./views/Login/Login.js";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component = {Login} />
      </Switch>
    </div>
  );
}

export default App;
