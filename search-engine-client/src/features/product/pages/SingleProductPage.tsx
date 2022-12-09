import { ProductDetails } from '../components'
import { useProductByPageId } from '../hooks'

export const SingleProductPage = ()=>{
    const product = useProductByPageId()
    
    return <main>
        <a href="/">Go to results</a>
        {
            product && <ProductDetails product={product} />
        }
    </main>
}