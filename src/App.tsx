import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { claim } from "./auth/auth.models";
import AuthenticationContext from "./auth/AuthenticationContext";
import Footer from "./Footer/Footer";
import Menu from "./navBar/Menu";
import routes from "./Urls/Route-config";
import configureValidations from "./validationForm/Validation";
// calling the custom validation function(UpperCase)
configureValidations();

function App() {
 // For authorization Purpose
 const [claims, setClaims] = useState<claim[]>([
// Hard coded claims for authentication
//{name: 'email' , value:'popularbelbase10@gmail.com'  },
//{name: 'role' , value: 'admin'}
 ]);

 // create a function that helps you to protect the route by the user roles
 function isAdmin(){
  return claims.findIndex(claim => claim.name === 'role' && claim.value==='admin') > -1;
 }

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />
        <div className="container">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.isAdmin && !isAdmin()  ? 
                <>
                <b>You have no permission to see the page</b>
                </> : <route.component />
                
                }
                
              </Route>
            ))}
          </Switch>
        </div>
        <br />
        <Footer />
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
