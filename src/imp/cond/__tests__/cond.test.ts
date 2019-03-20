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

const functionIncPayload = (value: number) => (payload: number) => payload + value;

describe('cond tests', () => {
    it('should execute cond fn inside composeA fn', async () => {
        const expectedResult = 35;
        const falseCondition1 = 8;
        const falseCondition3 = 6;
        const trueCondition2 = 7;
        const result = await _fish.composeA(
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            (payload: number) =>
                _fish
                    .cond(payload)
                    .set(payload === falseCondition1, functionIncPayload(10), false, true)
                    .set(payload === trueCondition2, () => functionIncPayload(20)(payload))
                    .set(payload === falseCondition3, functionIncPayload(30), false, true)
                    .done(),
            function3P,
            function3P,
            function3P,
            function3P,
            function2,
            function1P,
        )(mockData);
        expect(result).toBe(expectedResult);
    });
    it('should execute cond fn inside composeA fn', async () => {
        const expectedResult = 11;
        const result = await _fish.composeA(
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            () =>
                _fish
                    .cond(10)
                    .set(10 > 11, functionIncPayload(1), false, true)
                    .set(10 === 10, () => functionIncPayload(1)(2))
                    .set(10 < 9, functionIncPayload(1), false, true)
                    .done(),
            function3P,
            function3P,
            function3P,
            function3P,
            function2,
            function1P,
        )(mockData);
        expect(result).toBe(expectedResult);
    });
});
