import './App.css';
import { Switch, Route, Link } from "react-router-dom"; 
import Home from './pages/Home'
import NotHome from './pages/NotHome'


function App() {
  return (
  <>
    <div className="App">
      <Link to="/">Home  </Link>
      <Link to="NotHome">  Not Home</Link> 
  </div>

    <Switch>
      <Route path="/NotHome">
        <NotHome/>
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </>
  );
}

export default App;
