import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import backgroundImage from './shopping-cart.avif';
import Auth from './components/Auth/Auth.js';
import { useUser } from './context/userContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <>{!user && <Redirect to="/auth/sign-in" />}</>
      </Switch>
    </div>
  );
}

export default App;
