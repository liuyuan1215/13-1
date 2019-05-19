import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './components/Home'
import A from './components/A'
import B from './components/B'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>首页</Link>
        <Link to='/a'>a页面</Link>
        <Link to='/b'>b页面</Link>
        {/* <Route exact path='/' component={Home}></Route>
        <Route path='/a' component={A}></Route>
        <Route path='/b' component={B}></Route> */}
        <Switch>
          <Route path='/a' component={A}></Route>
          <Route path='/b' component={B}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
