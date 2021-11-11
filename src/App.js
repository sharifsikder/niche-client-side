import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import MyOrders from './Component/MyOrders/MyOrders';
import Order from './Component/Order/Order';
import Pay from './Component/Pay/Pay';
import Products from './Component/Products/Products';
import Register from './Component/Register/Register';
import Review from './Component/Review/Review';
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
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <Route path="/myorders">
            <MyOrders></MyOrders>
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
