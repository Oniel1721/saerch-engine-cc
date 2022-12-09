import { Product } from "../types"
import { Link } from 'react-router-dom'

interface Props {
    product: Product
}

export const ProductCard = ({ product }: Props)=>{
    return <figure role='product-card'>
        <img src={product.photo} alt={product.title} />
        <figcaption>
            <h4><Link to={`/products/${product.id}`}>{product.title}</Link></h4>
            <p>{product.shortDescription}</p>
        </figcaption>
    </figure>
}