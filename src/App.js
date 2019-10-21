import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import  Menu  from './components/Menu';
import  Projects  from './components/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu}/>
        <Route path='/projects' component={Projects}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
