import logo from './A.jpg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
    
     <h3 className="d-flex justify-content-center m-3">
        React JS Front END
     </h3> 
        <img src={logo} className="App-logo" alt="logo" />
        <Route exact path="/">
          <Department />
        </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
