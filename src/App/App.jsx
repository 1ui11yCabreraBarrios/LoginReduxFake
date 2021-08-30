import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';


function App() {
  return (
    <div className="jumbotron">
    <div className="container">
        <div className="col-md-8 offset-md-2">
           
           <Router history={history}>
             <Switch>
               <Route path="/login" component={LoginPage}/>
             </Switch>

           </Router>
        </div>
    </div>
</div>
  );
}

export default App;
