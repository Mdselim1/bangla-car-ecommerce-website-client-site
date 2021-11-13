import './App.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './components/HomePage/Home/Home';
import Notfound from './components/Shared/Notfound/Notfound';
import Register from './components/SignIn/Register/Register';
import Login from './components/SignIn/Login/Login';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Products from './components/Pages/Products/Products';
import ProductCart from './components/Pages/ProductCart/ProductCart';
import Footer from './components/Shared/Footer/Footer';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './components/Pages/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/home">
              <Home/>
          </Route>
          <Route exact path="/products">
              <Products/>
          </Route>
          <PrivateRoute exact path="/products/:id">
              <ProductCart/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="*">
              <Notfound/>
        </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
