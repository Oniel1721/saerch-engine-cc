import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Product } from '../../types'
import { ProductDetails } from '../ProductDetails'

const product: Product = {
    id: 1,
    title: 'Some title',
    description: 'Some description',
    shortDescription: 'Some short description',
    photo: 'Photo url'
}

describe('ProductDetails', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<ProductDetails product={product} />)
    })

    it('Should render title', async ()=>{
        render(<ProductDetails product={product} />)
        await screen.findByText(product.title)
    })

    it('Should render description', async ()=>{
        render(<ProductDetails product={product} />)
        await screen.findByText(product.description)
    })

    it('Should render an img with title as alt and photo url as src', async ()=>{
        render(<ProductDetails product={product} />)
        const img = await screen.findByAltText(product.title) as HTMLImageElement
        expect(img.src).toBe(product.photo)
    })
})