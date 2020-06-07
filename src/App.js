import React from "react";
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
      </Switch>
    
    </div>
  );
}

export default App;
