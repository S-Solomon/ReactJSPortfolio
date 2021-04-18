import './App.scss' ;
import NavBar from './components/NavBar' ;
import Homepage from './pages/Homepage';
import { Switch, Route } from 'react-router-dom' ;
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
