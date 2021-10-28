import Home from './pages/Home'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import ProductsList from './pages/ProductsList';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/productlist">
        <ProductsList />
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
