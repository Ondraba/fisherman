import {_fish} from '../../../fisherman';

describe('reader monad tests', () => {
    it('should test new reader run', async () => {
        const initFn = (args: number) => args + 1;
        const initReader = _fish.reader(initFn);
        const result = initReader.run(0);
        expect(result).toBe(1);
    });
    it('should test reader new', async () => {
        const initFn = (args: number) => args + 1;
        const newFn = (args: number) => args + 10;
        const initReader = _fish.reader(initFn);
        const newReader = initReader.of(newFn);
        const result = newReader.run(0);
        expect(result).toBe(10);
    });
    it('should teste reader map', () => {
        const initFn = (args: string) => args + ', this is reader';
        const toMapFn = (args: string) => args + ' with map';
        const toMapFn2 = (args: string) => args + '!!';
        const initReader = _fish.reader(initFn);
        const toMapReader = initReader.map(toMapFn).map(toMapFn2);

        expect(toMapReader.run('Hello')).toEqual('Hello, this is reader with map!!');
    }),
        it('should test reader flat map', () => {
            const initFn = (args: string) => args + ', this is reader';
            const toMapFn = (args: string) => _fish.reader<string, string>(() => args + ' with flatMap');
            const initReader = _fish.reader(initFn);
            const newReader = initReader.flatMap(toMapFn);

            expect(newReader.run('Hello')).toEqual('Hello, this is reader with flatMap');
        });
});
