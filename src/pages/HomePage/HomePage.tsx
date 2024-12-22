import React, { useState } from 'react'
import NavBar from '../../components/Header/Header'
import './home.css'
import CollectionCard from '../../components/CollectionCard/CollectionCard'
import TrendingNow from '../../components/TrendingBox/Trending'
import { Collection } from '../../types/collection'
import { Footer } from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import sliderbar from '../../assets/Frame 3.png'
export const HomePage = () => {
  const navigate = useNavigate();

    function handleBuyClick() {
      alert("do you want to buy whole collection");
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
        <NavBar status='loggedin'/>
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
