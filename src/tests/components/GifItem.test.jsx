import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'

describe('test to <GifItem />', () => {
    const title = 'Saitama'
    const url = 'https://imagen-bonita.com/saitama.jpg'
    test('should match with the snapshot', () => {
        const { container } = render(
            <GifItem 
                title={title}
                url={url}
            />
        )
        expect(container).toMatchSnapshot()
    })

    test('should show the image with the indicated url and alt text', () => {
        render(
            <GifItem 
                title={title}
                url={url}
            />
        )
        const { src, alt } = screen.getByRole('img')

        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should show the title in the component', () => {
        render(
            <GifItem 
                title={title}
                url={url}
            />
        )

        expect(screen.getByText(title)).toBeTruthy()
    })
}) 