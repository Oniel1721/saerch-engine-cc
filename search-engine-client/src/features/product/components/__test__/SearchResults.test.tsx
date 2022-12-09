import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { Product } from '../../types'
import { SearchResults } from '../SearchResults'

const product: Product = {
    id: 1,
    title: 'Some title',
    description: 'Some description',
    shortDescription: 'Some short description',
    photo: 'Photo url'
}

describe('Searching', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<SearchResults products={[]} />)
    })

    it('Should appears No Products found when array its empty', async ()=>{
        render(<SearchResults products={[]} />)
        await screen.findByText('No products found')
    })

    it('Should appears cards when array have products', async ()=>{
        render(<SearchResults products={[product, {...product, id: 2}]} />)
        await screen.findByRole('product-card')
    })
})