import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <h2
        style={{
          height: 50,
          textAlign: "center",
          backgroundColor: "lightblue",
          color: "red",
        }}
      >
        Main Page
      </h2>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productID">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
