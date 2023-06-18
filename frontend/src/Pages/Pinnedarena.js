import React from 'react';
import './Pinnedarena.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
const Pinnedarena = () => {
    return <div className='Pinnedarena'>

        <div>
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
        </div>
    </div>;
}

Pinnedarena.propTypes = propTypes;
Pinnedarena.defaultProps = defaultProps;
// #endregion

export default Pinnedarena;