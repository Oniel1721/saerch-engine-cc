import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Product } from '../../types'
import { ProductCard } from '../ProductCard'

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
        render(<ProductCard product={product} />)
    })

    it('Should render title', async ()=>{
        render(<ProductCard product={product} />)
        await screen.findByText(product.title)
    })

    it('Should render title and it should be an anchor for that especific product page', async ()=>{
        render(<ProductCard product={product} />)
        const title = await screen.findByText(product.title) as HTMLAnchorElement
        expect(title.href).toBe(`/products/${product.id}`)
    })

    it('Should render shortDescription', async ()=>{
        render(<ProductCard product={product} />)
        await screen.findByText(product.shortDescription)
    })

    it('Should render an img with title as alt and photo url as src', async ()=>{
        render(<ProductCard product={product} />)
        const img = await screen.findByAltText(product.title) as HTMLImageElement
        expect(img.src).toBe(product.photo)
    })
})