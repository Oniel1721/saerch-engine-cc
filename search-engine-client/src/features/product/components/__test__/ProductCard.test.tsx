import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Product } from '../../types'
import { ProductCard } from '../ProductCard'
import { BrowserRouter } from 'react-router-dom'

const product: Product = {
    id: 1,
    title: 'Some title',
    description: 'Some description',
    shortDescription: 'Some short description',
    photo: 'Photo url'
}

describe('ProductCard', ()=>{
    afterEach(cleanup)

    const renderProductCard = ()=>{
        render(<ProductCard product={product} />, { wrapper: BrowserRouter })
    }

    it('Should render', ()=>{
        renderProductCard()
    })

    it('Should render title', async ()=>{
        renderProductCard()
        await screen.findByText(product.title)
    })

    it('Should render title and it should be an anchor for that especific product page', async ()=>{
        renderProductCard()
        const title = await screen.findByText(product.title) as HTMLAnchorElement
        expect(title.href).toBe(`/products/${product.id}`)
    })

    it('Should render shortDescription', async ()=>{
        renderProductCard()
        await screen.findByText(product.shortDescription)
    })

    it('Should render an img with title as alt and photo url as src', async ()=>{
        renderProductCard()
        const img = await screen.findByAltText(product.title) as HTMLImageElement
        expect(img.src).toBe(product.photo)
    })
})