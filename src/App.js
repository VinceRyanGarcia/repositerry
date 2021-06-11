import './App.css';
import { Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home'
import Resume from './pages/Resume'
import Notes from './pages/Graphics'


function App() {
  return (
  <>

    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="Resume">Resume</Link> 
      <Link to="Notes">Graphics</Link>
    </div>
  
  
    <Switch>
      <Route path="/Notes">
        <Notes/>
      </Route>

      <Route path="/Resume">
        <Resume/>
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </>
  );
}

export default App;
