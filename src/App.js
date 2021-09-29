import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">

        <Route exact path="/">
          <Department />
        </Route>
    </div>
    <Switch>
        <Route path='/home' component={Home}/> 
        <Route path='/department' component={Department}/>
        <Route path='/employee' component={Employee}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
