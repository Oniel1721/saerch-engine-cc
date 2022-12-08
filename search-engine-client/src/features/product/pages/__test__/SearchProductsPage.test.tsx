import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { SearchProductsPage } from '../SearchProductsPage'

describe('SearchProductsPage', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<SearchProductsPage />)
    })

    it('Should have a search input', ()=>{
        render(<SearchProductsPage />)
        screen.getByRole('search-input')
    })

    it('Should type on search input', ()=>{
        render(<SearchProductsPage />)
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target:{value:'a'}})
        expect(input.value).toBe('a')
    })

    it('Should have a search button', ()=>{
        render(<SearchProductsPage />)
        screen.getByRole('search-button')
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
        fireEvent.keyDown(input, {key: 'Enter'})
        await screen.findByText(`Searching: ${input.value}`)
    })

    it('Should appears Searching:{input.value} when type Backspace on input', async ()=>{
        render(<SearchProductsPage />)
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'b'}})
        fireEvent.keyDown(input, {key: 'Backspace'})
        await screen.findByText(`Searching: ${input.value}`)
    })
})