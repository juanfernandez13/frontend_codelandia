import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Desafio1 from './Pages/Desafio1'
import Desafio2 from './Pages/Desafio2'
import Desafio3 from './Pages/Desafio3'
import Desafio4 from './Pages/Desafio4'
import Desafio5 from './Pages/Desafio5'

function App() {
  return (
      <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/Desafio1' element={<Desafio1/>}/>
        <Route path='/Desafio2' element={<Desafio2/>}/>
        <Route path='/Desafio3' element={<Desafio3/>}/>
        <Route path='/Desafio4' element={<Desafio4/>}/>
        <Route path='/Desafio5' element={<Desafio5/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
