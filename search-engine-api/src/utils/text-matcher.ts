export const normalizeText = (text: string): string=>{
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

export const doesPartialMatch = (text: string, query: string): boolean=>{
    return normalizeText(text).includes(normalizeText(query))
}