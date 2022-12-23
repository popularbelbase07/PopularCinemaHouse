import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Footer/Footer";
import Menu from "./navBar/Menu";
import routes from "./Urls/Route-config";
import configureValidations from "./validationForm/Validation";
// calling the custom validation function(UpperCase)
configureValidations();

function App() {
 

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
         {routes.map(route =>
           <Route key={route.path} path={route.path} exact= {route.exact } >
            <route.component/>
            </Route>)}
        </Switch>
      </div>
      <br/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
