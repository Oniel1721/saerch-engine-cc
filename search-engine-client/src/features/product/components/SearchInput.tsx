import { useCallback, useRef } from "react"
import './styles/SearchInput.css'

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

    return <section className="search-bar">
        <div className="search-input-container">
            <input 
                className="search-input"
                ref={inputRef as any} 
                onKeyUp={handleKeyUp} 
                role='search-input'

            />
        </div>
        <button 
            className="search-button"
            onClick={handleClick} 
            role='search-button'><i/></button>
    </section>
}