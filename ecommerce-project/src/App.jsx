import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/home/HomePage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { Tracking } from './pages/Tracking';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = useCallback(async () => {
    try {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App
