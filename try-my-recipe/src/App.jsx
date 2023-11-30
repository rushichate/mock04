import React from 'react';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import './App.css';
import Create from './components/Create';
import Browse from './components/Browse';

function App() {
  return (
    <>
    <Router>
      <div>
        <nav>
          <ul><li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Recipe</Link>
            </li>
            <li>
              <Link to="/browse">Browse Recipe</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/create' element={<Create/>}/>
          <Route path='/browse'element={<Browse/>}/>
          <Route path='/home' element={<h1>Welcome to Try My Recipe App</h1>}/>
        </Routes>
      </div>
    </Router>
    
    
    </>
  );
}

export default App;
