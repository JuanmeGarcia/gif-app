import React from 'react'

function GifItem({ img }) {
	return (
        <div className='card'>
            <img className='gif' src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}

export { GifItem }
