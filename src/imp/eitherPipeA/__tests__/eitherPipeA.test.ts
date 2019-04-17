import {_fish} from '../../../fisherman';

interface MockData {
    id: string;
    desc: string;
    array: string[];
    count: number;
}

const mockData: MockData = {
    id: '5c6a7e2c58dc124b08338152',
    desc: 'mock description',
    array: ['string1', 'string2', 'string3'],
    count: 1,
};

const function1P = async (mockData: MockData): Promise<MockData> => {
    return {
        ...mockData,
        count: mockData.count + 1,
    };
};
const function2 = (mockData: MockData): number => {
    return mockData.count + 1;
};
const function3P = async (count: number): Promise<number> => {
    return count + 1;
};

describe('eitherPipeA tests', () => {
    it('should test eitherPipeA composition without left params', async () => {
        const expectedResult = 3;
        const result = await _fish.eitherPipeA({exec: function1P}, {exec: function2})(mockData).fold;
        expect(result).toBe(expectedResult);
    });
    it('should test eitherPipeA composition with left params and non empty result values', async () => {
        const expectedResult = 3;
        const result = await _fish.eitherPipeA({exec: function1P, left: 'Chyba'}, {exec: function2, left: 'Chyba 2'})(mockData).fold;
        expect(result).toBe(expectedResult);
    });
    it('should test eitherPipeA composition with left params and empty result value', async () => {
        const expectedResult = 'Chyba 2';
        const result = await _fish.eitherPipeA({exec: () => undefined, left: 'Chyba'}, {exec: function2, left: 'Chyba 2'})(mockData).fold;
        expect(result).toBe(expectedResult);
    });
    it('should test eitherPipeA composition with left params and empty result value and keep first left as left fold result', async () => {
        const expectedResult = 'Chyba 2';
        const result = await _fish.eitherPipeA(
            {exec: () => undefined, left: 'Chyba'},
            {exec: () => undefined, left: 'Chyba 2'},
            {exec: () => undefined, left: 'Chyba 3'},
        )(mockData).fold;
        expect(result).toBe(expectedResult);
    });
    it('should test left result propagateFn', async () => {
        const expectedResult = 'Chyba 2';
        let propagateFnResultProp = '';
        const result = await _fish.eitherPipeA(
            {exec: () => undefined, left: 'Chyba'},
            {exec: () => undefined, left: 'Chyba 2'},
            {exec: () => undefined, left: 'Chyba 3'},
        )(mockData);
        await result.propagate((val: any) => (propagateFnResultProp = val));
        expect(propagateFnResultProp).toBe(expectedResult);
    });
    it('should test propagateFn with non left result', async () => {
        const expectedResult1 = '';
        const expectedResult2 = 4;
        let propagateFnResultProp = '';
        const result = await _fish
            .eitherPipeA({exec: function1P, left: 'Chyba'}, {exec: function2, left: 'Chyba 2'}, {exec: function3P, left: 'Chyba 3'})(mockData)
            .propagate((val: any) => (propagateFnResultProp = val));
        expect(propagateFnResultProp).toBe(expectedResult1);
        expect(result).toBe(expectedResult2);
    });
});
