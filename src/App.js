import { Route, Switch } from 'react-router-dom';
import './App.css';
import backgroundImage from './shopping-cart.avif';
import Auth from './components/Auth/Auth.js';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Switch>
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
