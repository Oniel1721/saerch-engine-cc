import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { SingleProductPage } from '../SingleProductPage'

describe('SingleProductPage', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<SingleProductPage />)
    })
})