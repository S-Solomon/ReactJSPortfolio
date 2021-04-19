import './App.scss' ;
import NavBar from './components/NavBar' ;
import Homepage from './pages/Homepage';
import { Switch, Route } from 'react-router-dom' ;
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage' ;
import BlogsPage from './pages/BlogsPage' ;
import ContactPage from './pages/ContactPage' ;


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
