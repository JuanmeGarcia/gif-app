import React from 'react'

function Button({handleAdd}) {
	return (
		<button 
            className="button" 
            onClick={handleAdd}
            type="submit"
        >
			Agregar
		</button>
	)
}

export { Button }
