
import './App.scss';
import NavBar  from './components/NavBar/NavBar.js';
import Apoyo from './pages/Apoyo';
import Proyectos from './pages/Proyectos';
import SobreLuna from './pages/SobreLuna';
import Home from './pages/Home'; 
import Editorial from './pages/Editorial';
import {BrowserRouter,Route, Routes} from  "react-router-dom"
import Details  from './pages/Details';

function App() {  
  return (
    //JSX
      <>
        <div className = 'container'> 
        <NavBar />
          <Routes>
            <Route path = "/Home" element = {<Home /> } />
            <Route path = "/SobreLuna" element = {<SobreLuna /> } />
            <Route path = "/Proyectos" element = {<Proyectos /> } />
            <Route path = "/Apoyo" element = {<Apoyo /> } />
            <Route path = "/Editorial" element = {<Editorial /> } />
            <Route path = "/Editorial/:id" element = {<Details />}/>
            <Route path ="*" element = {<h1>ERROR 404 - pagina no encontrada</h1>} />
          </Routes>
        </div>
      </>       
  );
}
export default App;
