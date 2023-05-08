import './App.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from './Components/Welcome/Welcome';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import { Navbar } from './Components/Navbar/Navbar';
import { Men } from './Components/Men/Men';
import { Women } from './Components/Women/Women';
import { Kids } from './Components/Kids/Kids';
import { Perfumes } from './Components/Perfumes/Perfume';
import { Watches } from './Components/Watches/Watches';
import { Cosmetics } from './Components/Cosmetics/Cosmetics';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Welcome />]} />
          <Route path='/Welcome' element={[<Welcome />]} />
          <Route path='/Login' element={[<Login />]} />
          <Route path='/Signup' element={[<Signup />]} />
          <Route path='/Navbar' element={[<Navbar />]} />
          <Route path='/Watches' element={[<Navbar />, <Watches />]} />
          <Route path='/Men' element={[<Navbar />, <Men />]} />
          <Route path='/Women' element={[<Navbar />, <Women />]} />
          <Route path='/Kids' element={[<Navbar />, <Kids />]} />
          <Route path='/Perfumes' element={[<Navbar />, <Perfumes />]} />
          <Route path='/Cosmetics' element={[<Navbar />, <Cosmetics />]} />
          
          {/* <Route path='/MenDetails/:id' element={[<Navbar />,<MenDetails/>]} /> */}
          {/* <Route path='/WomenDetails/:id' element={[<Navbar />,<MenDetails/>]} />
          <Route path='/KidDetails/:id' element={[<Navbar />,<MenDetails/>]} />
          <Route path='/PerfumeDetails/:id' element={[<Navbar />,<MenDetails/>]} />
          <Route path='/WatchDetails/:id' element={[<Navbar />,<MenDetails/>]} />
          <Route path='/Details/:id' element={[<Navbar />,<MenDetails/>]} /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
