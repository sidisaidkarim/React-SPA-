import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';

import Home from './Home';
import About from './About';
import Contact from './Contact'
import Projects from './Projects';


import { BrowserRouter,Route,Link} from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <div>
     <Nav />


      <Route exact path='/' component={Home}> </Route>
      <Route path='/about' component={About}> </Route>
      <Route path='/contact' component={Contact}> </Route>
      <Route path='/projects' render={Projects}></Route>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
