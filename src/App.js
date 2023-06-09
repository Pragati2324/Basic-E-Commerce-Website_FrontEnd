import './App.css';
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateC from './Components/PrivateC';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdatePro from './Components/UpdateComponent';
import UpdateComponent from './Components/UpdateComponent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateC/>}>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/add' element={<AddProduct/>}></Route>
        <Route path='/update/:id' element={<UpdateComponent/>}></Route>
        <Route path='/logout' element={<h1> Logout Products Components</h1>}></Route>
        <Route path='/profile' element={<h1>Profile Components</h1>}></Route>
        </Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login'element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
