import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Signup from './Signup';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <div className="App">
    {/* <Contact/> */}
    <Router>
      <Routes>
      <Route path='/' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    
    
    {/* <Home/> */}
    </div>
  );
}

export default App;
