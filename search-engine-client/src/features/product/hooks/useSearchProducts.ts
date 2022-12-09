import { useFetch } from '../../../hooks'
import type { Product } from '../types'

export const useSearchProducts = (query: string)=>{
    const { data, isLoading } = useFetch<Product[]>(`http://localhost:5500/api/products/search?query=${query}`)
    return {
        data, 
        isLoading
    }
}