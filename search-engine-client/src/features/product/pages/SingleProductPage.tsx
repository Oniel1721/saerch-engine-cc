import { ProductDetails } from '../components'
import { useProductByPageId } from '../hooks'
import { Link } from 'react-router-dom'
import './styles/SingleProductPage.css'


export const SingleProductPage = ()=>{
    const product = useProductByPageId()
    
    return <main className='product-details-page'>
        <Link className='go-back' to="/">Go back</Link>
        {
            product && <ProductDetails product={product} />
        }
    </main>
}