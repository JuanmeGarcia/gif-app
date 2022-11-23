import { useFetchedGifs } from '../hooks/useFetchedGifs'
import { GifItem } from './GifItem'
import { PropTypes } from 'prop-types'

function GifGrid({ category }) {
	const { gifs, loading } = useFetchedGifs(category)

	const listImages = gifs.map((img, i) => {
		return (
			<GifItem 
				key={i}
				title={img.title}
				url={img.url}
			/> //mala practica poner key={i}
		)
	})

	return (
		<>
			<h3>{category}</h3>
			{loading && <h2 className="loading">Loading...</h2>}
			<section className="gif-grid">{listImages}</section>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

export { GifGrid }
