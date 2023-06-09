import Home from './Home.js';
import About from './About.js';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './Contact.js';
import Navbar from './Navbar.js';
import What from './What we do.js';
import Projects from './Projects.js';
import Blogs from './Blogs.js';


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>       
          <Route exact path='/' Component={Home}/>
          <Route exact path='/About' Component={About}/>
          <Route exact path='/What' Component={What}/>
          <Route exact path='/Projects' Component={Projects}/>
          <Route exact path='/Blogs' Component={Blogs}/>
          <Route exact path='/Contact' Component={Contact}/>
          </Routes>
   </BrowserRouter>
   
    </>
  );
}

export default App;
