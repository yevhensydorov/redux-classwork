import videoId from '../../src/reducers/videoId';

describe('videoId reducer', () => {
    it('should return the initial state', () => {
        expect(videoId(undefined, {type: 'xxx'})).toEqual('xsSnOQynTHs')
    })

    it('should handle RECEIVE_ID', () => {
        expect(
            videoId('xxx',{
                type: 'RECEIVE_ID',
                videoId: 'sbc'
            })
        ).toEqual('sbc')
    })

    it('should handle default switch case', () => {
        expect(
            videoId('abc', {
                type: 'OPEN_DOOR',
                videoId: 'xyz'
            })
        ).toEqual('abc')
    })
})