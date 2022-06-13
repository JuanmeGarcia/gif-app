export const getGifs = async (category) =>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=H2RdN73mPI7LTTIoQp0OREoqlN4Gue4K&q=${category}`
    const response = await fetch(URL)
    const { data } = await response.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    const ramdonGifs = []
    
    for(let index = 0; index < 10; index++){
        const selectRamdon = Math.floor(Math.random() * gifs.length)
        ramdonGifs.push(gifs[selectRamdon])
    }
    return ramdonGifs
}