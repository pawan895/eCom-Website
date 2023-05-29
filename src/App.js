import './App.css';
import Header from './container/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path='/list' element={<ProductListing />} />
          <Route path='/product/productId' element={<ProductDetail />} />          
        </Routes>

      


    </div>
  );
}

export default App;
