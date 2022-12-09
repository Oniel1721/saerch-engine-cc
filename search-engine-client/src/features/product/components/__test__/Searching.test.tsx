import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Searching } from '../Searching'

describe('Searching', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<Searching isSearching value='' />)
    })

    it('Should not display when isSearching is false', async ()=>{
        const element = Searching({isSearching: false, value: '1'})
        expect(element).toBeNull()
    })

    it('Should display when isSearching is true with text Searching: {value}', async ()=>{
        render(<Searching isSearching value='3' />)
        await screen.findByText('Searching: 3')
    })
})