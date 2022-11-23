import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"
import "@testing-library/jest-dom"
import React from "react"

describe('Test suite for <App />', () => {

    const dummyInitialState = [
        'Saitama',
        'Goku'
    ]

    const newCategory = 'Batman'

    test('should return an alert', () => {
        render(
            <App />
        )
        screen.debug()

        const form = screen.getByRole('form')
        const input = screen.getByRole('textbox')
        jest.spyOn(window, 'alert').mockImplementation(() => {})

        fireEvent.input(input, {
            target: {
                value: "Saitama"
            }
        })
        fireEvent.submit(form)

        fireEvent.input(input, {
            target: {
                value: "Saitama"
            }
        })
        fireEvent.submit(form)

        expect(window.alert).toBeCalledWith('Category already exists')
    })

    test('should add a new category to the array', () => {
        const setStateMock = jest.fn()
        const useStateMock = (useState) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)
        jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <App />
        )

        const [gifs, setGifs] = useStateMock(dummyInitialState)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {
            target: {
                value: newCategory
            }
        })
        fireEvent.submit(form)

        expect(setGifs).toBeCalled()
    })
    test('should return the initial value', () => {

        const setStateMock = jest.fn()
        const useStateMock = (useState) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)

        const [gifs, setGifs] = useStateMock(dummyInitialState)
        render(
            <App />
        )
    
        expect(gifs).toEqual(dummyInitialState)
    })
    
})