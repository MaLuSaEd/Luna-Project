
import './App.scss';
import NavBar  from './components/NavBar/NavBar.js';
import Apoyo from './pages/Apoyo';
import Proyectos from './pages/Proyectos';
import SobreLuna from './pages/SobreLuna';
import Home from './pages/Home'; 
import {Route, Routes} from  "react-router-dom"
function App() {
  
  return (
    //JSX
      <>
      <NavBar />
      <div className = 'container'> 
        <Routes>
          <Route path = "/Home" element = {<Home /> } />
          <Route path = "/SobreLuna" element = {<SobreLuna /> } />
          <Route path = "/Proyectos" element = {<Proyectos /> } />
          <Route path = "/Apoyo" element = {<Apoyo /> } />
        </Routes>
      </div> 
      
      </>
        
  );
}

export default App;
