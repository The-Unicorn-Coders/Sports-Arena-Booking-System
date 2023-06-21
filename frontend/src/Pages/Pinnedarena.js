import React, { useState, useEffect } from 'react';
import './Pinnedarena.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BookSports from './BookSports'; 



// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */

const PinImage = ({ image, pinnedImageId, onPin }) => {
    const [isPinned, setIsPinned] = useState(false);
  
    useEffect(() => {
      setIsPinned(image.id === pinnedImageId);
    }, [image.id, pinnedImageId]);
  
    const handlePinClick = () => {
      setIsPinned(!isPinned);
      onPin(image.id);
    };
  
    return (
      <div className="image-container">
       
        <button onClick={handlePinClick} className={isPinned ? 'pinned' : ''}>
          {isPinned ? 'Unpin' : 'Pin'}
        </button>
      </div>
    );
  }

const Pinnedarena = () => {
    const images = [
        { id: 1, src: 'image1.jpg', alt: 'Image 1' },
       
        { id: 3, src: 'image3.jpg', alt: 'Image 3' },
      ];
    
      const [pinnedImageId, setPinnedImageId] = useState(null);
      const [showPinnedImageSection, setShowPinnedImageSection] = useState(false);
    
      useEffect(() => {
        const pinnedImageIdFromStorage = localStorage.getItem('pinnedImageId');
        if (pinnedImageIdFromStorage) {
          setPinnedImageId(Number(pinnedImageIdFromStorage));
          setShowPinnedImageSection(true);
        }
      }, []);
    
      useEffect(() => {
        if (pinnedImageId) {
          localStorage.setItem('pinnedImageId', pinnedImageId);
          setShowPinnedImageSection(true);
        } else {
          localStorage.removeItem('pinnedImageId');
          setShowPinnedImageSection(false);
        }
      }, [pinnedImageId]);
    
      const handlePin = (imageId) => {
        if (imageId === pinnedImageId) {
          setPinnedImageId(null);
        } else {
          setPinnedImageId(imageId);
        }
      };

    return <div className='Pinnedarena'>

        


{/* 
        <h2>Image Gallery</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <PinImage
            key={image.id}
            image={image}
            pinnedImageId={pinnedImageId}
            onPin={handlePin}
          />
        ))}
      </div>
      {showPinnedImageSection && pinnedImageId && (
        <div>
          <h3>Pinned Image:</h3>
          <img
            src={images.find((image) => image.id === pinnedImageId).src}
            alt={images.find((image) => image.id === pinnedImageId).alt}
          />
        </div>
      )} */}

                <div>
        {/* This is a div that contains a span with a class of 'newArenaHeader'*/}
        <p className='newArenaHeader'>Pinned Arenas</p>
        </div>
        <div className='newlyPly1'>
         {/*This is an image with a class of 'Nplayground1' and a source of 'cricket-lanes jpg'*/}
        <img className='Nplayground1' src='cricket-lanes.jpg' alt='playground' />
       {/* This is a div with a class of 'Ncricket1' that contains a centered span with a class of 'f1'*/}
        <div className='Ncricket1'>
        <center><span className='f1'>Sport</span></center>
        </div>
        </div>

        {/* This is a similar set of elements as above, but with different classes and image sources */}
        <div className='newlyPly2'>
        <img className='Nplayground2' src='cricket-lanes.jpg' alt='playground' />
        <div className='Ncricket2'>
        <center><span className='f1'>Sport</span></center>
        </div>
        </div>

        {/* This is a similar set of elements as above, but with different classes and image sources */}
        <div className='newlyPly3'>
        <img className='Nplayground3' src='cricket-lanes.jpg' alt='playground' />
        <div className='Ncricket3'>
        <center><span className='f1'>Sport</span></center>
        </div>
        
        </div>
    </div>;
    
}

Pinnedarena.propTypes = propTypes;
Pinnedarena.defaultProps = defaultProps;
// #endregion

export default Pinnedarena;