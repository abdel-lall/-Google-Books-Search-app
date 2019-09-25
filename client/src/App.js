import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Notfound from "./pages/notfound.js";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Jumbotron from "./components/jumbotron"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/save" component={Save} />
          <Route component={Notfound} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App