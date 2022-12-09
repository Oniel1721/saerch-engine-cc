import { useState } from "react"
import { SearchResults } from "../components"
import { Searching } from "../components/Searching"
import { SearchInput } from "../components/SearchInput"
import { useSearchProducts } from "../hooks"
import './styles/SearchProductsPage.css'

export const SearchProductsPage = ()=>{
    const [ query, setQuery ] = useState('')

    const { data: products, isLoading } = useSearchProducts(query)

    const onSearch = (newValue: string)=>{
        setQuery(newValue)
    }
    
    return <main>
        <header className="header">
            <h1>Products search engine</h1>
            <SearchInput onSearch={onSearch} />
        </header>
        <section>
            <Searching value={query} isSearching={isLoading} />
            {
                products && <SearchResults products={products} />
            }
        </section>
    </main> 
}