import "./collectioncard.css"
import { useState } from 'react';
import Avatar from '../../assets/Rectangle 10.png'
import Mask from '../../assets/Mask group.png'
import { Collection } from "../../types/collection";
import { useNavigate } from "react-router-dom";


interface CollectionCardprops{
    collection:Collection;
}

const CollectionCard:React.FC<CollectionCardprops> = ({collection}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
 function handleSubmit() {
  navigate('/main');
  }


  return (
    <div className="card" >
    <div className="card-image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
    >
      <img
        src={Mask} // Replace with your actual image URL
        alt="Night Sky"
      />
      {isHovered && (
        <button className="hover-button" onClick={handleSubmit}>Go to collection </button>
      )}
    </div>
    <div className="card-content">
      <div className="card-content-head">
        <h2>{collection.title}</h2>
        <div className="ntf-count">120 NTF</div>
      </div>
      
      <p className="price-range">Price Range: {collection.priceRange.max}{collection.priceRange.max}</p>
      <p className="description">
        {collection.description}
      </p>
      <div className="card-footer">
        <div className="artist-info">
          <img
            src={Avatar} // Replace with artist avatar
            alt="Artist"
            className="artist-avatar"
          />
          <div className="artist-name">
              <span>Artist</span>
              <h1>{collection.artist.name}</h1>
            </div>
         
        </div>
       
      </div>
    </div>
  </div>
  )
}




export default CollectionCard