import {_fish} from '../../../fisherman';

type CustomType = {
    name: string,
    count: number
}

const mockDataCustom: CustomType[] = [
    {name:'Ondra', count: 1},
    {name:'Michaela', count: 100}
]

const mockDataEmpty:[] = [];

describe('getOrArray tests', () => {
    it('should return non empty array value', async () => {
        const expectedResult = mockDataCustom;
        expect(_fish.getOrArray(undefined)(mockDataCustom)).toBe(expectedResult);
    });
    it('should empty array or value', async () => {
        const expectedResult = 'empty!';
        expect(_fish.getOrArray(expectedResult)([mockDataEmpty])).toBe(expectedResult);
    });
});

