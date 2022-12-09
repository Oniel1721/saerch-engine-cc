import { ProductDetails } from '../components'
import { useProductByPageId } from '../hooks'
import { Link } from 'react-router-dom'


export const SingleProductPage = ()=>{
    const product = useProductByPageId()
    
    return <main>
        <Link to="/">Go to results</Link>
        {
            product && <ProductDetails product={product} />
        }
    </main>
}