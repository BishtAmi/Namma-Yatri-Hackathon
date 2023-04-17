import Booking from "./Booking";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
// import Demo from "./Demo";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Booking">
            <Booking />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Signup">
           <Signup/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
