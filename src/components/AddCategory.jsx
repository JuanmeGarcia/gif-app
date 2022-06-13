import React, { useRef, useState } from 'react'
import {Button} from './Button'

function AddCategory({ onAddCategory }) {
	const [text, setText] = useState('')
    const inputRef = useRef(null)

	const onChange = e => {
		setText(e.target.value)
	}

	const handleSubmit = e => {
        e.preventDefault()
        const inputValue = text.trim()
        console.log(`submit hecho`);
        if(inputValue.length > 2) {
            onAddCategory(inputValue)
            setText('')
            inputRef.current.focus()
        }else{
            alert('El nombre de la categoria debe tener al menos 3 caracteres')
        }

	}

	return (
		<form 
            action="" 
            onSubmit={handleSubmit}
        >
			<input 
                type="text" 
                value={text} 
                onChange={onChange} 
                ref={inputRef}
            />
            <Button />
		</form>
	)
}

export { AddCategory }
