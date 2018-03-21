import addToPlaylist from '../../src/reducers/addToPlaylist';

describe('addToPlaylist reducer', () => {
    it('should return the initial state', () => {
        expect(addToPlaylist(undefined, {type: 'REMOVE_BUGS'}))
        .toEqual([])
    })

    it('should handle SAVE_TO_PLAYLIST', () => {
        expect(addToPlaylist([], {
            type: 'SAVE_TO_PLAYLIST',
            result: [{result1: 'gitter'}]
        }
     )
    ).toEqual([
        {result1: 'gitter'}
        ])
    })

    it('should handle default switch case', () => {
        expect(addToPlaylist([], {
            type: 'SAVE_THE_CODE',
            result: [{result1: 'gitter'}]
        })
    ).toEqual([])
    })
})