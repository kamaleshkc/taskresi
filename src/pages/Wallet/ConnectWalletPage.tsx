import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/Header/Header'
import './connectwallet.css'
import { login } from '../../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';


interface LoginProps {
  onLogin: () => void;
}
const ConnectWallet: React.FC<LoginProps> = ({onLogin}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const handleSubmit = () => {
    onLogin();
    dispatch(login()); // Dispatch the login action
    navigate('/homepage');


  };


  const wallets = [
    { id: 1, name: "Wallet 1", icon: "https://via.placeholder.com/100" },
    { id: 2, name: "Wallet 2", icon: "https://via.placeholder.com/100" },
    { id: 3, name: "Wallet 3", icon: "https://via.placeholder.com/100" },
  ];


  return (
    <div>
      <NavBar status='loggedout'/>
        <div className="wallet-connect">
      <h1 className="wallet-title">Choose the wallet to connect</h1>
      <div className="wallet-options">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="wallet-card"  onClick={handleSubmit}>
            <p>{wallet.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
   
  )
}

export default ConnectWallet

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
