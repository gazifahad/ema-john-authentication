import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Orders from './components/Orders/Orders';
import Shop from './components/shop/shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';


function App() {
  return (
    <div className="App">
   <Header></Header>
   <Routes>
     <Route path='/' element={<Shop></Shop>}></Route>
     <Route path='/home' element={<Shop></Shop>}></Route>
     <Route path='/orders' element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
     <Route path='/inventory' element={<RequireAuth>
      <Inventory></Inventory>
      </RequireAuth>
    }></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/signUp' element={<Signup></Signup>}></Route>
     <Route path='/logout' element={<Signup></Signup>}></Route>
     <Route path='/shipment' element={<Shipment></Shipment>}></Route>
   </Routes>
    </div>
  );
}

export default App;
