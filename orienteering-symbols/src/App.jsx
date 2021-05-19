import './App.css';
import {Symbols} from './Components/Symbols';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Symbols}/>
    </Switch>
  </Router>
  );
}  


export default App;
