import './App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Box from '@mui/material/Box';
import Home from './Home/Home';
import User from './User/User';
import Popular from './Popular/Popular';
import Player from './Player/Player';
import Recommendations from './Recommendations/Recommendations';
import Landing from './Landing/Landing';

function App() {
  const [isloggedin, setloggedinstatus] = useState(false);
  return (
    <BrowserRouter>
    <div className="App">
      {!isloggedin && (
      <><Home/>
      </>
      )}
      {isloggedin && (
         <>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path="/player" element={<Player/>}></Route>
          </Routes>
       
       
        </>
        
      )}
         
    </div>
    </BrowserRouter>
  );
}

export default App;
