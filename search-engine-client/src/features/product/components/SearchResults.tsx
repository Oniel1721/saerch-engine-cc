import type { Product } from "../types"

interface Props {
    products: Product[]
}

export const SearchResults = ({ products }: Props)=>{
    return <article>
        {
            products.length
            ? (
                products.map((product)=>(
                    <figure role='product-card' key={product.id}></figure>
                ))
            )
            : (
                <h3>No products found</h3>
            )
        }
    </article>
}