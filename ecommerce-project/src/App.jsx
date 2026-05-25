import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/home/HomePage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { Tracking } from './pages/Tracking';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }
    getCartItems();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>

  )
}

export default App
