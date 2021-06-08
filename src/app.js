import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./details";
import SearchParams from "./searchparams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Parrot",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Pug",
//     }),
//   ]);
// };

const App = () => (
  <div>
    <h1>Adopt Me</h1>

    <Router>
      <Switch>
        {/* switch is used to match the exact routes,
          without switch / was considered the route for /details/:id and / content was also visible on the browser
          Order should be followed in switch:
              if /details/:id is used first then it matches with the route and shows the component
        */}
        <Route path="/details/:id">
          <Details />
        </Route>

        <Route path="/">
          <SearchParams />
        </Route>
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
