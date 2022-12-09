import { Product } from "../types"

interface Props {
    product: Product
}

export const ProductCard = ({ product }: Props)=>{
    return <figure role='product-card'>
        <img src={product.photo} alt={product.title} />
        <figcaption>
            <h4>{product.title}</h4>
            <p>{product.shortDescription}</p>
        </figcaption>
    </figure>
}