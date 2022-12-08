import { useState } from "react"
import { Searching } from "../components/Searching"
import { SearchInput } from "../components/SearchInput"

export const SearchProductsPage = ()=>{
    const [ value, setValue ] = useState('')
    const [ isSearching, setIsSearching ] = useState(false)

    const onSearch = (newValue: string)=>{
        setValue(newValue)
        setIsSearching(true)
    }
    
    return <main>
        <header>
            <SearchInput onSearch={onSearch} />
        </header>
        <section>
            <Searching value={value} isSearching={isSearching} />
        </section>
    </main> 
}