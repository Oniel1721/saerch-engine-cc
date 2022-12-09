import { Product } from "../types"
import './styles/ProductDetails.css'

interface Props {
    product: Product
}

export const ProductDetails = ({ product }: Props) => {
    return (
        <section className="product-details">
            <h1 className="product-details-title">{product.title}</h1>
            <img className="product-details-photo" src={product.photo} alt={product.title} />
            <article className="product-details-info">
                <p>{product.description}</p>
            </article>   
        </section>
    )
}