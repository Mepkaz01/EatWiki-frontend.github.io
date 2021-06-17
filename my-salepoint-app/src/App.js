import logo from './logo.svg';
import './App.css';
import { Link, Route } from  'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import Items from "./components/Items"
import Item from "./components/Item"
import AddItem from "./components/AddItem"
import UserItems from "./components/UserItems"
import ItemEdit from "./components/ItemEdit"


function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Home />} /> 
      
      <Route path="/login" render={(props) => <Login {...props}/>}/>

      <Route path="/signup" render={(props) => <Signup {...props}/>}/>

      <Route path="/profile/:id" render={(props) => <Profile {...props}/>}/>

      <Route path="/items" exact render={ (props) =><Items {...props} />}/>

      {/* only user item CRUD  */}

      <Route path="/items/:userid" render={ (props) =><UserItems {...props} />}/>  

      <Route path="/item/:indx" render={ (props) =><Item {...props}/>}/>

      <Route path="/additem" render={(props) => <AddItem {...props}/>}/>  

      <Route path="/itemedit/:indx" render={(props) => <ItemEdit {...props}/>}/> 

    </div>
  );
}

export default App; 
