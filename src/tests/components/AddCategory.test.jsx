import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"


describe('Test suite of <AddCategory />', () => {
    const inputValue = 'Saitama'

    test('should change the input text', () => {
        render(
            <AddCategory 
                onAddCategory={() => {}}
            />
        )
        const input = screen.getByRole('textbox')
        expect(input.value).toBe("")

        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        })
        expect(input.value).toBe(inputValue)
    })

    test('should call onNewCategory if input has a value', () => {

        const onAddCategoryMock = jest.fn()

        render(
            <AddCategory 
                onAddCategory={onAddCategoryMock}
            />
        )
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        })
        fireEvent.submit(form)
        expect(input.value).toBe("")
        expect(onAddCategoryMock).toHaveBeenCalledTimes(1)
        expect(onAddCategoryMock).toBeCalledWith(inputValue)

    })

    test('should show alert if input is empty', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        const onAddCategoryMock = jest.fn()
        render(
            <AddCategory 
                onAddCategory={onAddCategoryMock}
            />
        )
        const form = screen.getByRole('form')

        fireEvent.submit(form)
        expect(window.alert).toBeCalled()
        expect(onAddCategoryMock).not.toBeCalled()
    }) 
})