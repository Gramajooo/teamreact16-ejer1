import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContainerCart from "./components/ContainerCart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/Cart" component={ContainerCart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
