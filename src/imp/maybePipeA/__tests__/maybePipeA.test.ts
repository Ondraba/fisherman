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

const function4PCurr = () => async (count: number): Promise<number> => {
    return count + 1;
};

describe('maybePipeA tests', () => {
    it('should return true caused by undefined return value fn', async () => {
        const result = await _fish.maybePipeA(() => undefined, function2)(mockData).isEmpty;
        expect(result).toBe(true);
    });
    it('should return false caused by non empty return value fn', async () => {
        const result = await _fish.maybePipeA(function1P, function2)(mockData).isEmpty;
        expect(result).toBe(false);
    });
    it('should return orValue caused by undefined return value fn', async () => {
        const result = await _fish
            .maybePipeA(() => undefined, function2)(mockData)
            .valueOr(10);
        expect(result).toBe(10);
    });
    it('should return not orValue caused by non empty return value fn', async () => {
        const expectedResult = 3;
        const result = await _fish
            .maybePipeA(function1P, function2)(mockData)
            .valueOr(10);
        expect(result).toBe(expectedResult);
    });
    it('should return valid result after different fn types async pipe', async () => {
        const expectedResult = 4;
        const result = await _fish.maybePipeA(function1P, function2, function3P)(mockData).value;
        expect(result).toBe(expectedResult);
    });
    it('should return valid result after smallest possible async pipe', async () => {
        const expectedResult = 3;
        const result = await _fish.maybePipeA(function1P, function2)(mockData).value;
        expect(result).toBe(expectedResult);
    });
    it('should return valid result after biggest possible async pipe', async () => {
        const expectedResult = 16;
        const result = await _fish.maybePipeA(
            function1P,
            function2,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function4PCurr(),
        )(mockData).value;
        expect(result).toBe(expectedResult);
    });
});


