import logo from './logo.svg';
import './App.css';
import { Link, Route } from  'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import Items from "./components/Items"
import ItemDelete from "./components/ItemDelete"
import ItemAdd from "./components/ItemAdd"
import UserItems from "./components/UserItems"
import ItemEdit from "./components/ItemEdit"
import AllUserItems from "./components/AllUserItems"
import ShoppingCart from './components/ShoppingCart';



function App() {
  return (
    <div className="App">
     
      <Route path="/" exact render={() => <Home />} /> 
      
      <Route path="/login" render={(props) => <Login {...props}/>}/>

      <Route path="/signup" render={(props) => <Signup {...props}/>}/>

      <Route path="/profile/:id" render={(props) => <Profile {...props}/>}/>

      <Route path="/items" exact render={ (props) =><Items {...props} />}/>

      <Route path="/items/:userid" render={ (props) =><UserItems {...props} />}/>  

      <Route path="/itemdelete/:indx" render={ (props) =><ItemDelete {...props}/>}/>

      <Route path="/itemadd" render={(props) => <ItemAdd {...props}/>}/>  

      <Route path="/itemedit/:indx" render={(props) => <ItemEdit {...props}/>}/> 

      <Route path="/allitems" exact render={ (props) =><AllUserItems {...props} />}/>
      <Route path="/cart"  render={ (props) =><ShoppingCart {...props} />}/>

    </div>
  );
}

export default App; 
