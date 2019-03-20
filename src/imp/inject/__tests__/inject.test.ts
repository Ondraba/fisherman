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

describe('inject tests', () => {
    it('should set value to property out of composition with anonymous fn', async () => {
        const expectedResult = 15;
        let propertyToMutate = 5;
        const newPropertyToMutateValue = 50;

        const mutatePropertyFnTo10 = (value: number) => {
            propertyToMutate = value;
            return propertyToMutate;
        };

        const result = await _fish.composeA(
            function3P,
            _fish.inject(mutatePropertyFnTo10, false),
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
            function2,
            function1P,
        )(mockData);
        expect(result).toBe(expectedResult);
        expect(propertyToMutate).toBe(newPropertyToMutateValue);
    });
    it('should set value to property out of composition with resolve arg', async () => {
        const expectedResult = 15;
        let propertyToMutate = 5;
        const newPropertyToMutateValue = 50;

        const mutatePropertyFnTo10 = (value: number) => {
            propertyToMutate = value;
            return propertyToMutate;
        };

        const result = await _fish.composeA(
            function3P,
            _fish.inject(mutatePropertyFnTo10, false, newPropertyToMutateValue),
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
            function2,
            function1P,
        )(mockData);
        expect(result).toBe(expectedResult);
        expect(propertyToMutate).toBe(newPropertyToMutateValue);
    });
    it('should set value to property out of composition with payload args as previous composition result', async () => {
        const expectedResult = 15;
        let propertyToMutate = 5;
        const newPropertyToMutateValue = 50;
        const expectedPropertyToMutateValue = 14;

        const mutatePropertyFnTo10 = (value: number) => {
            propertyToMutate = value;
            return propertyToMutate;
        };

        const result = await _fish.composeA(
            function3P,
            _fish.inject(mutatePropertyFnTo10, true, newPropertyToMutateValue),
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
            function2,
            function1P,
        )(mockData);
        expect(result).toBe(expectedResult);
        expect(propertyToMutate).toBe(expectedPropertyToMutateValue);
    });
});
