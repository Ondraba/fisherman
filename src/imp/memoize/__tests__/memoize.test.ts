import {_fish} from '../../../fisherman';

const function1ToMemoize = async (arr: number[]): Promise<number> => arr.reduce((prev, next) => prev + next);

describe('memoize tests', () => {
    it('should test memoize results - not memoize flow itself', async () => {
        const memoizedFn = _fish.memoize(function1ToMemoize);
        const computedRes = await memoizedFn([1, 2, 3]);
        const computedRes2 = await memoizedFn([1, 2, 3, 4]);
        const uncomputedRes = await memoizedFn([1, 2, 3, 4]);
        expect(computedRes).toBe(6);
        expect(computedRes2).toBe(10);
        expect(uncomputedRes).toBe(10);
    });
});
