import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { SearchProductsPage } from '../SearchProductsPage'

describe('SearchProductsPage', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<SearchProductsPage />)
    })

    it('Should appears Searching:{input.value} text when click on button', async ()=>{
        render(<SearchProductsPage />)
        const button = screen.getByRole('search-button')
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'b'}})
        fireEvent.click(button)
        await screen.findByText(`Searching: ${input.value}`)
    })

    it('Should appears Searching:{input.value} when type Enter on input', async ()=>{
        render(<SearchProductsPage />)
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'b'}})
        fireEvent.keyUp(input, {key: 'Enter'})
        await screen.findByText(`Searching: ${input.value}`)
    })

    it('Should appears Searching:{input.value} when type Backspace on input', async ()=>{
        render(<SearchProductsPage />)
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'bb'}})
        fireEvent.keyUp(input, {key: 'Backspace'})
        screen.findByRole('searching')
        await screen.findByText(`Searching: ${input.value}`)
    })
})