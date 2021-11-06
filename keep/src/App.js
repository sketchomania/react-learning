// import { Switch, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Icon from "./Icon";
import logo from "./logo.svg";
import menu from "./icons/menu_black_24dp.svg";
import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {/* <Route path="/" exact>
            <HomePage />
          </Route>
          <Route pat="/auth">
            <AuthPage />
          </Route>
          <Route path="/Profile">
            <UserProfile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Icon className="icon" name="star" /> */}
          <Icon className="icon" name="unicorn" />
          <img src={menu} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Layout>
    </div>
  );
}

export default App;
