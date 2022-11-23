import { getGifs } from "../../helpers/getGifs"

describe('test to getGifs function', () => {

    const dummyGif = {
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
    }

    test('should return an gifs array', async () => {
        const gifs = await getGifs('one punch')

        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual(dummyGif)
    })
})