import React from 'react'
import PropTypes from 'prop-types';

function GifItem({ url, title }) {
	return (
        <div className='card'>
            <img className='gif' data-testid='gif-image' src={url} alt={title} />
            <p data-testid='gif-title'>{title}</p>
        </div>
    )
}

export { GifItem }


GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}