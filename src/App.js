import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import AllCountries from './components/AllCountries/AllCountries';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryInfo from './components/CountryInfo/CountryInfo';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <AllCountries/>
          </Route>
          <Route path="/countryInfo/:countryName">
            <CountryInfo/>
          </Route>
          <Route exact path="/">
            <AllCountries/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
