import search from '../../src/reducers/search';

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect(search(undefined, {type: 'MAKE_CODE'})).toEqual({})
    })

    it('should handle RECEIVE_SEARCH', () => {
        expect(search
            ({},
                {type: 'RECEIVE_SEARCH', 
                
                    query: 'kitten',
                    results: ['alpha', 'bravo', 'charlie']
                
                }
            )
        ).toEqual({
            'kitten' : ['alpha', 'bravo', 'charlie']
        })
    })

    it('should handle default switch case', () => {
        expect(search            
            ({},
                {
                    type: 'MAKE_CODE', 
                    query: 'kitten',
                    results: ['alpha', 'bravo', 'charlie']
                }
            )
        ).toEqual({})
    })
})