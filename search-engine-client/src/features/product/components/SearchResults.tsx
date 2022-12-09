import type { Product } from "../types"
import { ProductCard } from "./ProductCard"
import './styles/SearchResults.css'

interface Props {
    products: Product[]
}

export const SearchResults = ({ products }: Props)=>{
    return <>
        {
            products.length
            ? (
                <article className="cards-container">
                    {
                        products.map((product)=>(
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </article>
            )
            : (
                <h3 className="not-found">No products found</h3>
            )
        }
    </>
}