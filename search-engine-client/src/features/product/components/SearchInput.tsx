import { useCallback, useRef } from "react"

interface Props {
    onSearch: (query: string)=>void
}

export const SearchInput = ({ onSearch }:Props)=>{
    const inputRef = useRef<HTMLInputElement>()

    const handleKeyUp = useCallback(async (e:any)=>{
        if(!['Enter', 'Backspace'].includes(e.key)) return;
        onSearch(inputRef.current?.value ?? '')
    }, [])

    const handleClick = useCallback(()=>{
        onSearch(inputRef.current?.value ?? '')
    }, [])

    return <div>
        <input 
            ref={inputRef as any} 
            onKeyUp={handleKeyUp} 
            role='search-input'

        />
        <button onClick={handleClick} role='search-button'>Search</button>
    </div>
}