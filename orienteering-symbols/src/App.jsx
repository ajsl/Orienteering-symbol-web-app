import './App.scss';
import Header from './Components/Header';
import {Symbols} from './Components/Symbols';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header></Header>
    <Router>
    <Switch>
      <Route exact path="/" component={Symbols}/>
    </Switch>
  </Router>
    </Fragment>
    
  );
}  


export default App;
