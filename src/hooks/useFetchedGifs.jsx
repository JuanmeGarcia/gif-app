import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export function useFetchedGifs(category) {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            getGifs(category)
                .then(gifs => setGifs(gifs))
            
            setLoading(false)
        }, 1000)
    }, [])

    return {
        gifs,
        loading
    }
}