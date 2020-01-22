import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import MenuBar from "./components/MenuBar/MenuBar";
import HomePage from "./components/HomePage/HomePage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import "./App.module.css";

function App() {
  return (
    <Router>
      <div>
        <MenuBar></MenuBar>
        <Switch>
          <Route path="/404" component={NotFoundPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
