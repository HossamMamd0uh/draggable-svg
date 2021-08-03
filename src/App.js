import logo from './logo.svg';
import './App.css';
import home from './components/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/*index*/}
        
        <Route path="/" component={home} exact/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
