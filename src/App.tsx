import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import { HomePage } from './pages/HomePage/HomePage';
import { CollectionPage } from './pages/CollectionPage/CollectionPage';
import ConnectWallet from './pages/Wallet/ConnectWalletPage';
import { useState } from 'react';
import PostList from './components/PostList';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import CartList from './components/CartList/cartList';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    return isUserLoggedIn ? children : <Navigate to="/" />;
  };
  return (
  <Router>
    <Routes>
        <Route path='cart' element={<CartList/>}/>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/posts' element={<PostList/>}/>
        <Route path="/main" element={<CollectionPage />} />
        <Route path="/wallet" element={< ConnectWallet onLogin={()=>setIsUserLoggedIn(true)}/>} />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

      </Routes>
  </Router>
    
)}

export default App;
