import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path="/signin"component={SignIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
