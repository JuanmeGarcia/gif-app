import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import useFetchedGifs from '../hooks/useFetchedGifs'
import {GifItem} from './GifItem'

function GifGrid({ category }) {
	const { gifs, loading } = useFetchedGifs(category)

	const listImages = gifs.map((img, i) => {
		return (
			<GifItem key={i} img={img} /> //mala practica poner key={i}
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

export { GifGrid }
