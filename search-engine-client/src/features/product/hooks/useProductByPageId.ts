import { useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks'
import { Product } from '../types'

export const useProductByPageId = ()=>{
    const params = useParams()

    const { data: product } = useFetch<Product>(`http://localhost:5500/api/products/${params.id}`)

    return product
}