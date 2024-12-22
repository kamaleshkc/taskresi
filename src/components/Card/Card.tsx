import './card.css'
import { useEffect, useState } from 'react';
import Avatar from '../../assets/Rectangle 10.png'
import Mask from '../../assets/Mask group.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addToCart } from '../../features/cartSlice';

interface Cardprops{
    title:string;
    price:number;
}


const Card:React.FC<Cardprops> = ({title,price}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const nft={title,price};
  function handleSubmit (){
    if (isLoggedIn===true) {
      dispatch(addToCart(nft));
      alert("NFT purchased.")
      // If authLoggedIn is true, set showWelcomeMessage to true
    } else {
     alert("request unsucessfull.")
    }
  }




  return (
    <div className="sm-card" >
    <div className="sm-card-image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
    >
      <img
        src={Mask} // Replace with your actual image URL
        alt="Night Sky"
      />
      {isHovered && (
        <button className="sm-hover-button" onClick={handleSubmit}>Buy</button>
      )}
    </div>
    <div className="sm-card-content">
      <div className="sm-card-content-head">
        <h2>{title}</h2>
        <div className="sm-ntf-count">120 NTF</div>
       </div>
      </div>
    </div>
  )
}




export default Card