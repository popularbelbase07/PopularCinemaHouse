import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./navBar/Menu";
import routes from "./Route-config";

function App() {
 

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
         {routes.map(route =>
           <Route key={route.path} path={route.path} exact= {route.exact} >
            <route.component/>
            </Route>)}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
