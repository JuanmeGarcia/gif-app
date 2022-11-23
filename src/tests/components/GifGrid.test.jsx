import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../components'
import { useFetchedGifs } from '../../hooks/useFetchedGifs'

jest.mock('../../hooks/useFetchedGifs')

describe('Test suite of <GifGrid />', () => {

    const category = 'One Punch'
    const dummyGifs = [
        {
            id: 'abc',
            title: 'saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: 'def',
            title: 'goku',
            url: 'https://localhost/goku.jpg'
        }
    ] 

    test('should show a loading initially', () => {

        useFetchedGifs.mockReturnValue({
            gifs: [],
            loading: true
        })

        render(
            <GifGrid 
                category={category}
            ></GifGrid>
        )
        screen.debug()

        const text = screen.getByText('Loading...')
        const title = screen.getByText(category)
        
        expect(text).toBeTruthy()
        expect(title.innerHTML).toBe(category)
    })

    test('should show items when images are load by custom hook', () => {

        useFetchedGifs.mockReturnValue({
            gifs: dummyGifs,
            loading: false
        })

        const { container } = render(
            <GifGrid 
                category={category}
            ></GifGrid>
        )
        screen.debug()

        const images = screen.getAllByRole('img')
        expect(container).toMatchSnapshot()
        expect(images.length).toBe(2)
    })
})