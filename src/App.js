import './App.css';
import { Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home'
import Resume from './pages/Resume'


function App() {
  return (
  <>
    <div className="App">
      <Link to="/">Home  </Link>
      <Link to="Resume">  Resume</Link> 
  </div>

    <Switch>
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
