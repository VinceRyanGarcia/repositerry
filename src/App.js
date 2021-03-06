import './App.css';
import { Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Graphics from './pages/Graphics'


function App() {
  return (
  <>

    {/* <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="AboutMe">About Me</Link> 
      <Link to="Graphics">Graphics</Link>
    </div> */}
  
    <Switch>
      <Route path="/Graphics">
        <Graphics/>
      </Route>

      <Route path="/AboutMe">
        <AboutMe/>
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </>
  );
}

export default App;
