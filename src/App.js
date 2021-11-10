import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Order from './Component/Order/Order';
import Products from './Component/Products/Products';
import Register from './Component/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/order/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/explore">
            <Products></Products>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
      </AuthProvider>
    </div>
  );
}

export default App;
