import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  return (
    <div className="App">
      <Router basename="/data-holder">
          <Switch>
            <Route path="/" exact component={Component1}/>
            <Route path="/component/1" component={Component1}/>
            <Route path="/component/2" component={Component2} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
