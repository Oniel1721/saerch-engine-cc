import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useFetch } from '../useFetch'

describe('useFetch', ()=>{
    it('Should get api data and correct state changes', async ()=>{
        const {result, rerender} = renderHook(({url}:any)=> useFetch(url), {
            initialProps: {url: 'https://pokeapi.co/api/v2/'}
        })
        expect(result.current.data).toBeUndefined()
        expect(result.current.isLoading).toBe(true)
        await new Promise((res)=>{
            setTimeout(()=>{
                rerender({url: 'https://pokeapi.co/api/v2/'})
                res(result)
            }, 2000)
        })
        expect(result.current.data).toBeDefined()
        expect(result.current.isLoading).toBe(false)
    })

    it('Should refetch when url change', async ()=>{
        const {result, rerender} = renderHook(({url}:any)=> useFetch(url), {
            initialProps: {url: 'https://pokeapi.co/api/v2/'}
        })
        expect(result.current.data).toBeUndefined()
        expect(result.current.isLoading).toBe(true)
        await new Promise((res)=>{
            setTimeout(()=>{
                rerender({url: 'https://pokeapi.co/api/v2/'})
                res(result)
            }, 2000)
        })
        expect(result.current.data).toBeDefined()
        expect(result.current.isLoading).toBe(false)
        rerender({url: 'https://pokeapi.co/api/v2/language/'})
        expect(result.current.isLoading).toBe(true)
        await new Promise((res)=>{
            setTimeout(()=>{
                rerender({url: 'https://pokeapi.co/api/v2/language/'})
                res(result)
            }, 2000)
        })
        expect(result.current.isLoading).toBe(false)
    })
})