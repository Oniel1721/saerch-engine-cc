import './styles/Searching.css'

interface Props {
    isSearching: boolean,
    value: string
}

export const Searching = ({isSearching, value}:Props)=>{
    return <h3 style={{
        opacity: isSearching?1:0
    }} className="searching" role='searching'>Searching: {value}</h3>
}