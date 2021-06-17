import logo from './logo.svg';
import './App.css';
import { Link, Route } from  'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import Items from "./components/Items"
import UserItems from "./components/UserItems"

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Home />} /> 
      
      <Route path="/login" render={(props) => <Login {...props}/>}/>

      <Route path="/signup" render={(props) => <Signup {...props}/>}/>

      <Route path="/profile/:id" render={(props) => <Profile {...props}/>}/>

      <Route path="/items" exact render={ () =><Items />}/>

      <Route path="/items/:userid" render={ () =><UserItems />}/>

    </div>
  );
}

export default App; 
