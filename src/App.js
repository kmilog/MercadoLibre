import React from 'react';
import './App.css';
import {Switch, Route, Router, Link} from 'react-router-dom'
import Detail from './Pages/detail'
import SearchProduct from './Components/searchProduct'
import Search from './Components/search';


function App() {
  return (
    <div className="App">
        <Search></Search>
          <Switch>
              <Route exact path='/' component={Search}></Route>
              <Route path='/items/:search' component={SearchProduct}></Route>
              <Route path='/item/:id' component={Detail}></Route>
          </Switch>
    </div>
  );

}

export default App;
