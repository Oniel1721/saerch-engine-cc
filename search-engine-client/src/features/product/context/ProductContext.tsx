import { createContext, useState } from "react";
import { useSearchProducts } from "../hooks";
import { Product } from "../types";

export interface ProductContextState {
    products?: Product[],
    isSearching: boolean,
    searchValue: string,
    setSearchValue: (value: string)=>void
}

export const ProductContext = createContext({} as ProductContextState)

export const ProductProvider = ({ children }: any)=>{
    const [searchValue, setSearchValue] = useState('')
    const { data: products, isLoading: isSearching } = useSearchProducts(searchValue)

    return <ProductContext.Provider
        value={{
            isSearching,
            products,
            searchValue,
            setSearchValue
        }}
    >
        {children}
    </ProductContext.Provider>
}
