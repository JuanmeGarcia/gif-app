import { useState } from 'react'

import {AddCategory, GifGrid} from './components'

function App() {
	const [categories, setCategories] = useState([
		'One Punch',
		'Ruroini Kenshin',
		'Dragon Ball Z',
	])


	const onAddCategory = newCategory => {

		if (categories.includes(newCategory)) {
			alert('Category already exists')
			return
		}

		setCategories([newCategory, ...categories])
	}

	const listedCategories = categories.map(category => (
		// <li key={category}>{category}</li>
		<GifGrid 
			key={category} 
			category={category} 
		/>
	))

	return (
		<div className="container">
			<header>
				<h1>GifExpert App</h1>
				<AddCategory
					setCategories={setCategories}
					onAddCategory={event => onAddCategory(event)}
				/>
			</header>
			<hr />
			<ul>{listedCategories}</ul>
		</div>
	)
}

export default App
