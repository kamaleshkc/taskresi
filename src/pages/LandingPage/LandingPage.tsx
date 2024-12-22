import React from 'react'
import NavBar from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import TrendingNow from '../../components/TrendingBox/Trending'
import './landing.css'
import { Collection } from '../../types/collection'
import CollectionCard from '../../components/CollectionCard/CollectionCard'
import sliderbar from '../../assets/Frame 3.png'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();
    function handleBuyClick() {
        alert("you need to login to buy")
        navigate("/wallet");
    }

    function handleSeeCollectionClick() {
      navigate('/main');
    }

    const collections: Collection[] = [
      {
        title: "Night Sky",
        quantityAvailable: 120,
        priceRange: { min: 0.12, max: 0.18, currency: "BTC" },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        artist: { name: "Léa Jacquot" }
      },
      {
        title: "Ocean Breeze",
        quantityAvailable: 100,
        priceRange: { min: 0.10, max: 0.15, currency: "BTC" },
        description: "Suspendisse potenti. Phasellus euismod arcu...",
        artist: { name: "Carlos Vega" }
      },
      {
        title: "Golden Horizon",
        quantityAvailable: 75,
        priceRange: { min: 0.20, max: 0.25, currency: "BTC" },
        description: "Fusce venenatis magna vel metus tincidunt...",
        artist: { name: "Amara Singh" }
      }
    ];

  return (
    <div>
    <NavBar status='loggedout'/>
    <div className='mini-container'>
          <img src={sliderbar}alt='slider' className='slider'></img>
    </div>
    <TrendingNow
    title="Night Sky Collection"
    subtitle="With the stars"
    badge="Trending Now"
    artist={{
        name: 'Léa Jacquot',
        avatar: 'https://example.com/avatar.jpg',
    }}
    image="https://example.com/night-sky.jpg"
    onBuyClick={handleBuyClick}
    onSeeCollectionClick={handleSeeCollectionClick} 
    varient='background'
    />
    <div className='content-text'>Collections</div>
    <div className='card-container'>
      {collections.map((collection, index) => (
          <CollectionCard key={index} collection={collection} />
        ))}
    </div>
    <Footer/>
   

    </div>
  )
}

export default LandingPage