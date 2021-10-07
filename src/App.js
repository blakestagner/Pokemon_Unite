import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Roster from "./views/Roster";
import PokemonDetails from "./pokemon/PokemonDetail";
import { PokemonProvider } from "./context/PokemonContext";
import { SelectProvider } from "./context/SelectContext";
import PageNotFound from "./error/PageNotFound";
import Navigation from "./Toolbar/Navigation";
import Landing from "./views/Landing";
import Items from "./views/Items";
import Toolbar from "./Toolbar/Toolbar";

function App() {
  useEffect(() => {
    console.log("loaded");
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <Router>
        <PokemonProvider>
          <SelectProvider>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/roster" component={Roster} />
              <Route path="/pokemon/:handle" component={PokemonDetails} />
              <Route path="/items" component={Items} />
              <Route
                path="/page-not-found/:param1/:param2"
                component={PageNotFound}
              />
            </Switch>
          </SelectProvider>
        </PokemonProvider>
      </Router>
    </div>
  );
}

export default App;
