import { useState } from "react"

export const SearchProductsPage = ()=>{
    const [ value, setValue ] = useState('')
    const [ isSearching, setIsSearching ] = useState(false)

    return <div>
        <input onKeyDown={(e)=>{
            if(e.key === 'Enter' || e.key === 'Backspace'){
                setIsSearching(true)
            }
        }} value={value} onChange={(e)=>setValue(e.target.value)} role='search-input' />
        <button onClick={()=> setIsSearching(true)} role='search-button'>Search</button>
        {
            isSearching && <p>Searching: {value}</p>
        }
    </div> 
}