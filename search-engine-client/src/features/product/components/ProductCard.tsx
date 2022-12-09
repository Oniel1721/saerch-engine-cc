import { Product } from "../types"
import { Link } from 'react-router-dom'
import './styles/ProductCard.css'

interface Props {
    product: Product
}

export const ProductCard = ({ product }: Props)=>{
    return <figure className="product-card" role='product-card'>
        <img className="product-card-photo" src={product.photo} alt={product.title} />
        <figcaption className="product-card-info">
            <h4 className="product-card-title"><Link to={`/products/${product.id}`}>{product.title}</Link></h4>
            <p  className="product-card-desc">{product.shortDescription}</p>
        </figcaption>
    </figure>
}