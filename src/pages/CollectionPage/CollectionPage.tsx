import React, { useEffect, useState } from 'react'
import NavBar from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import logo from '../../assets/Rectangle 3.png';
import avatar from '../../assets/Rectangle 10.png'
import './collection.css'

type Artist = {
  name: string;
  avatar: string;
};
interface TrendingCollectionProps {
  title: string;
  subtitle: string;
  description:string;
  badge: string;
  artist: Artist;
  image: string;
}


export const CollectionPage = () => {
  
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const[value,setValue]=useState("loggedout");
    console.log(value)
    useEffect(() => {
      if (isLoggedIn===true) {
        setValue("loggedin");
        // If authLoggedIn is true, set showWelcomeMessage to true
      } else {
        setValue("loggedout"); // Otherwise, set it to false
      }
    }, []); // Run the effect

      function handleBuyClick(): void {
        alert('you can buy');
    }

    function handleSeeCollectionClick(): void {
        throw new Error('Function not implemented.')
    }

    interface NFT {
      title: string;
      price: number;
    }
    
    const nftList: NFT[] = [
      { title: "Golden Sunset", price: 2.5 },
      { title: "Mystic Forest", price: 1.8 },
      { title: "Cosmic Dreams", price: 3.2 },
    
    ];


  
  return (
    <div>
       <NavBar status={value}/>
       <section className='col-trending-now'>
          <div className="col-trending-content">
            <span className="col-trending-badge">Trending now</span>
            <h1>Collection</h1>
            <h2>Night Sky</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo</p>
            <div className="col-trending-artist">
              <div className="col-artist-info">
                <img
                  src={avatar} // Replace with artist avatar
                  alt="Artist"
                  className="col-artist-avatar"
                />
                <div>
                  <span>Artist</span>
                  <h1>Léa Jacquot</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt="Night Sky"
              className="col-trending-image"
            />
          </div>
        </section>
        <div className='col-content-text'>NFTs</div>
        <div className='card-container'>
          {nftList.map((nfts, index) => (
              <Card key={index} title={nfts.title} price={nfts.price} />
            ))}
        </div>
        <Footer/>
    </div>
    
  )
}
