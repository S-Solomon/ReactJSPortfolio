// import './App.scss' ;
import NavBar from './components/NavBar' ;
import Homepage from './pages/Homepage';
import { Switch, Route } from 'react-router-dom' ;
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage' ;
import BlogsPage from './pages/BlogsPage' ;
import ContactPage from './pages/ContactPage' ;
import { useState } from 'react';



function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }






  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
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
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
