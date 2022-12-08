import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { SearchInput } from '../SearchInput'

describe('SearchInput', ()=>{
    afterEach(cleanup)

    it('Should render', ()=>{
        render(<SearchInput onSearch={()=>{}} />)
    })

    it('Should have a search input', ()=>{
        render(<SearchInput onSearch={()=>{}} />)
        screen.getByRole('search-input')
    })

    it('Should type on search input', ()=>{
        render(<SearchInput onSearch={()=>{}} />)
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target:{value:'a'}})
        expect(input.value).toBe('a')
    })

    it('Should have a search button', ()=>{
        render(<SearchInput onSearch={()=>{}} />)
        screen.getByRole('search-button')
    })

    it('Should call onSearch callback text when click on button with correct argument', async ()=>{
        let value;
        const onSearch = vi.fn().mockImplementation((arg)=>{
            value = arg
        })
        render(<SearchInput onSearch={onSearch} />)
        const button = screen.getByRole('search-button')
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'b'}})
        fireEvent.click(button)
        expect(onSearch).toBeCalledTimes(1)
        expect(value).toBe(input.value)
    })

    it('Should call onSearch callback when type Enter on input with correct argument', async ()=>{
        let value;
        const onSearch = vi.fn().mockImplementation((arg)=>{
            value = arg
        })
        render(<SearchInput onSearch={onSearch} />)
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'b'}})
        fireEvent.keyUp(input, {key: 'Enter'})
        expect(onSearch).toBeCalledTimes(1)
        expect(value).toBe(input.value)
    })

    it('Should call onSearch callback when type Backspace on input with correct argument', async ()=>{
        let value;
        const onSearch = vi.fn().mockImplementation((arg)=>{
            value = arg
        })
        render(<SearchInput onSearch={onSearch} />)
        const input = screen.getByRole('search-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'bb'}})
        fireEvent.keyUp(input, {key: 'Backspace'})
        screen.findByRole('searching')
        expect(onSearch).toBeCalledTimes(1)
        expect(value).toBe(input.value)
    })
})