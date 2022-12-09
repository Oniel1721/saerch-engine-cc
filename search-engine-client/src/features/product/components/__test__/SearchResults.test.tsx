import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Product } from '../../types'
import { SearchResults } from '../SearchResults'

const product: Product = {
    id: 1,
    title: 'Some title',
    description: 'Some description',
    shortDescription: 'Some short description',
    photo: 'Photo url'
}

const products = [
    product,
    {...product, id: 2}
]

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
        render(<SearchResults products={products} />)
        const cards = await screen.findAllByRole('product-card')
        expect(cards).toHaveLength(products.length)
    })
})