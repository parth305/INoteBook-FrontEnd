
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import {  Route, Routes } from 'react-router-dom';
import Notestate from './context/Notes/notestate';

function App() {
  return (
    <div className="App">
      <Notestate>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </Notestate>
    </div>
  );
}

export default App;
