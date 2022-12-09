import { useEffect, useState } from "react"


export const useFetch = <T>(url: string)=>{
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(json=>setData(json))
        .finally(()=>setIsLoading(false))
    }, [url])

    return {
        data,
        isLoading
    }
}