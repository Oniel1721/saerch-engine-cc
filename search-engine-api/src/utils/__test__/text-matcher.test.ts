import { doesPartialMatch, normalizeText } from '../text-matcher'

describe('normalizeText', ()=>{
    test('parse to lower case', ()=>{
        const result = normalizeText('BaJkL8')
        expect(result).toBe('bajkl8')
    })

    test('remove accents diacritics', ()=>{
        const result = normalizeText('áÁ5Òüî')
        expect(result).toBe('aa5oui')
    })
})

describe('doesPartialMatch', ()=>{
    test('Ignore letter case', ()=>{
        const result = doesPartialMatch('ABC', 'abc')
        expect(result).toBe(true)
    })

    test('Ignore accents diacritics', ()=>{
        const result = doesPartialMatch('áÁ5Òüî', 'aa5oui')
        expect(result).toBe(true)
    })

    test('Match if includes query string in text string', ()=>{
        const result = doesPartialMatch('áÁ5Òüî', 'ou')
        expect(result).toBe(true)
    })
})