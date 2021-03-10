
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';



function App() {
  return (
    <div>
   
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Router>
    </div>
    
    
  );
}

export default App;
