import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import History from './pages/History';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Search} />
        <Route path='/history' component={History} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
