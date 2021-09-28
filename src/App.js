
import './App.css';


import { MdShoppingCart , MdPerson , MdPersonAdd} from "react-icons/md";
import { BrowserRouter, NavLink ,Switch ,Route } from 'react-router-dom';

import Footer from './Footer/Footer';

import Home from './Home/home';
import Courses from './Courses/Courses';


function App() {
  return (
    
      <BrowserRouter className="App">
          <div className="navbar">
          <div className="navv">
          <NavLink to="/" className="navv logo"> 
            Coursera
          </NavLink>

          <NavLink to="/Home" className="navv"> 
            Home
          </NavLink>


          <NavLink to="/Courses" className="navv"> 
            Courses
          </NavLink>

          <NavLink to="/Cart" className="navv icon"> 
        
            <MdShoppingCart/>
          </NavLink>
          </div>

          <div className="setting">
              <NavLink to="/login" className="navvv">
                    <button  className="btn">
                      <MdPerson/>
                    </button>
              </NavLink>

              <NavLink to="/signUp" className="navvv">
                    <button className="btn">
                      <MdPersonAdd/>
                    </button>
              </NavLink>
          </div>
          </div>
          <Switch>
        <Route path="/Home" component={Home} exact/>
        <Route path="/Courses" component={Courses} exact/>

          </Switch>
      <Footer/>
      </BrowserRouter>
      
      
     
    
  );
}

export default App;
