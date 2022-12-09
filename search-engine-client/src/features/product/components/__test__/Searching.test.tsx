import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Searching } from '../Searching'

describe('Searching', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<Searching isSearching value='' />)
    })

    it('Should have opacity 0 when isSearching is false', async ()=>{
        render(<Searching isSearching={false} value='' />)
        const element = await screen.findByRole('searching')
        expect(Number(element.style.opacity)).toBe(0)
    })

    it('Should have opacity 1 when isSearching is true', async ()=>{
        render(<Searching isSearching value='3' />)
        const element = await screen.findByRole('searching')
        expect(Number(element.style.opacity)).toBe(1)
    })

    it('Should display when isSearching is true with text Searching: {value}', async ()=>{
        render(<Searching isSearching value='3' />)
        await screen.findByText('Searching: 3')
    })
})