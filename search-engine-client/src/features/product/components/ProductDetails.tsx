import { Product } from "../types"

interface Props {
    product: Product
}

export const ProductDetails = ({ product }: Props) => {
    return (
        <figure>
            <img src={product.photo} alt={product.title} />
            <figcaption>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </figcaption>
        </figure>
    )
}