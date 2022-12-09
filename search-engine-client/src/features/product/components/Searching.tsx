interface Props {
    isSearching: boolean,
    value: string
}

export const Searching = ({isSearching, value}:Props)=>{
    if(!isSearching) return null;
    return <p role='searching'>Searching: {value}</p>
}