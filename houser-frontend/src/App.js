import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Router>    
        <div className="container">    
          <nav className="navbar navbar-expand-lg navheader">    
            <div className="collapse navbar-collapse" >    
              <ul className="navbar-nav mr-auto">    
                <li className="nav-item">    
                  <Link to={'/Login'} className="nav-link">Login</Link>    
                </li>    
                <li className="nav-item">    
                  <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
                </li>    
                
              </ul>    
            </div>    
          </nav> <br />    
          <Switch>    
            {/* <Route exact path='/Login' component={Login} />     */}
            <Route path='/Signup' component={signup} />    
          </Switch>    
        </div>    
      </Router>   
    </div>
  );
}

export default App;
