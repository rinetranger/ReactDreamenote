
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Myprof from './pages/Myprof';


function App() {
  return (
    <div>
   
    <Router>
      <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/myprof" component={Myprof} />
      </Switch>
    </Router>
    </div>
    
    
  );
}

export default App;
