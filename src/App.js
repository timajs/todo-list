import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Main from './components/Main/Main'
import Monday from './days/Monday/Monday'
import Thuesday from './days/Thuesday/Thuesday'
import Wednesday from './days/Wednesday/Wednesday'
import Thursday from './days/Thursday/Thursday'
import Friday from './days/Friday/Friday'
import Saturday from './days/Saturday/Saturday'

function App() {
  return (
    <div className="App">
         <Routes>
          <Route  path="/" element={<Main/>}></Route> 
          <Route path="/monday" element={<Monday/>}></Route>
          <Route path="/thuesday" element={<Thuesday/>}></Route>
          <Route path="/wednesday" element={<Wednesday/>}></Route>
          <Route path="/thursday" element={<Thursday/>}></Route>
          <Route path="/friday" element={<Friday/>}></Route>
          <Route path="/saturday" element={<Saturday/>}></Route>
        </Routes> 
    </div>
  );
}

export default App;
