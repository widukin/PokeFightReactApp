import { Switch, Route } from 'react-router-dom';
/* components */
import InputForm from "./components/InputForm";
import Footer from "./components/Footer";
/* views */
import ViewAllPokemons from "./views/ViewAllPokemons"

/* Logo */
import logo from "./img/pokefight_logo.png";
/* styles */
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header className="header">
          <div className="logo-wrapper">
              <img className="pokefight-logo" src={logo} />
          </div>
          <InputForm />
      </header>
      <main class="main">
        <Switch>
          <Route path="/pokemons/:id/:info"></Route>
          <Route path="/pokemons/:id">
            {/*Pokemon info by id*/}
          </Route>
          <Route path="/pokemons/fight">
            {/*Pokemon Fight*/}
          </Route>
          <Route path={["/","/pokemons"]}>
            {/*all pokemon*/}
            <ViewAllPokemons />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
