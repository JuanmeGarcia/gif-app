import { renderHook, waitFor } from "@testing-library/react"
import { useFetchedGifs } from "../../hooks/useFetchedGifs"

describe('Test suite for custom hook useFetchGifs', () => {

    const category = 'One punch'

    test('should return initial state', () => {

        const { result } = renderHook(() => useFetchedGifs(category))
        const { gifs, loading } = result.current

        expect(gifs.length).toBe(0)
        expect(loading).toBeTruthy()
        console.log(result);
    })

    test('should return an array of gifs and loading as true', async () => {

        const { result } = renderHook(() => useFetchedGifs(category))

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0),
            {
                timeout: 5000
            }
        )

        const { gifs, loading } = result.current

        expect(gifs.length).toBeGreaterThan(0)
        expect(loading).not.toBeTruthy()
        console.log(result);
    })
})