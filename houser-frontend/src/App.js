import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import signup from './components/signup';
import Login from './components/login';
import home from './components/home';
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <div className="App">
      <Router>    
      <nav className="navbar navbar-expand-lg navheader">    
            <div className="collapse navbar-collapse" >    
              <ul className="navbar-nav mr-auto">    
                <li className="nav-item">    
                  <Link to={'/login'} className="nav-link">Login</Link>    
                </li>    
                <li className="nav-item">    
                  <Link to={'/signup'} className="nav-link">Sign Up</Link>    
                </li>    
                
              </ul>    
            </div>    
          </nav> <br /> 
      <AuthProvider>
        <div className="container">    
          

          
            {/* <Route exact path='/Login' component={Login} />     */}
            <PrivateRoute path='/' component={home} />
            <Route path='/signup' component={signup} />  
            <Route path='/login' component={Login} />    
          
        </div>              
        </AuthProvider>     
      </Router>   
    </div>
  );
}

export default App;
