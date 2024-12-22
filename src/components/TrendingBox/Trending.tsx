import React from 'react'
import './trending.css'
import logo from '../../assets/Rectangle 3.png';
import avatar from '../../assets/Rectangle 10.png'
import Button from '../Button/Button';

type Artist = {
    name: string;
    avatar: string;
  };
  
  interface TrendingSectionProps {
    title: string;
    subtitle: string;
    badge: string;
    artist: Artist;
    image: string;
    varient:CardVarient;
    onBuyClick?: () => void;
    onSeeCollectionClick?: () => void;
  }

  type CardVarient = 'background' | 'nobackground' 



const TrendingNow: React.FC<TrendingSectionProps> = ({
    title,
    subtitle,
    badge,
    artist,
    image,
    varient,
    onBuyClick,
    onSeeCollectionClick,}) => {

  return (
    <section className={'trending-now'}>
      <div className="trending-content">
        <span className="trending-badge">{badge}</span>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="trending-artist">
          <div className="artist-info">
            <img
              src={avatar} // Replace with artist avatar
              alt="Artist"
              className="artist-avatar"
            />
            <div>
              <span>Artist</span>
              <h1>{artist.name}</h1>
            </div>
          </div>
        </div>
        <div className="trending-buttons">
            <Button label='Buy' variant='primary' onClick={onBuyClick}/>
            <Button label='See collection' variant='secondary' onClick={onSeeCollectionClick}/>
          
        </div>
      </div>
      <div>
        <img
          src={logo}
          alt="Night Sky"
          className="trending-image"
        />
      </div>
    </section>
  )
}

export default TrendingNow