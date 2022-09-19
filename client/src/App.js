import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from "./Components/login/login";
import ProfileCreation from './Components/ProfileCreation/profilecreation';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/profileCreation">
            <ProfileCreation />
          </Route>
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
