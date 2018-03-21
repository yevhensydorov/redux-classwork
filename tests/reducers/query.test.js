import query from '../../src/reducers/query';

describe('query reducer', () => {
    it('should return the initial state', () => {
        expect(query(undefined, {type: 'xxx'})).toEqual('');
    })

    it('should handle UPDATE_QUERY', () => {
        expect(
            query('', {
                type: 'UPDATE_QUERY',
                query: 'kitten'
            } )
        ).toEqual('kitten')
    })

    it('should handle default switch case', () => {
        expect(
            query('', {
                type: 'COOK_DINNER',
                query: 'kitten'
            })
        ).toEqual('')
    })
})