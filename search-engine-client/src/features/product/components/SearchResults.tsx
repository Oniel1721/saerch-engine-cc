import type { Product } from "../types"
import { ProductCard } from "./ProductCard"

interface Props {
    products: Product[]
}

export const SearchResults = ({ products }: Props)=>{
    return <article>
        {
            products.length
            ? (
                products.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))
            )
            : (
                <h3>No products found</h3>
            )
        }
    </article>
}