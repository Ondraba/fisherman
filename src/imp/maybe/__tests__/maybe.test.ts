import {_fish} from '../../../fisherman';

describe('maybe monad tests', () => {
    it('should test new maybe valueOr', async () => {
        const maybeNull = _fish.maybe(null);
        const result = maybeNull.valueOr(50);
        expect(result).toBe(50);
    });
    it('should test maybe isEmpty', async () => {
        const maybeNonNull = _fish.maybe(50).isEmpty;
        const maybeNull = _fish.maybe(null).isEmpty;
        expect(maybeNonNull).toBe(false);
        expect(maybeNull).toBe(true);
    });
    it('should test maybe map', async () => {
        const maybeMapped = _fish
            .maybe(50)
            .map((item) => item + 50)
            .map((item2) => item2 + 60)
            .valueOr(60);
        expect(maybeMapped).toBe(160);
    });
    it('should test maybe flatmap', async () => {
        const maybeFlatmapped = _fish
            .maybe(50)
            .map((item) => item + 50)
            .map((item2) => item2 + 60)
            .flatMap((item3) => _fish.maybe(item3))
            .valueOr(60);
        const maybeFlatmappedEmpty = _fish
            .maybe(50)
            .map((item) => item + 50)
            .map((item2) => item2 + 60)
            .flatMap(() => _fish.maybe(null))
            .valueOr(60);
        expect(maybeFlatmapped).toBe(160);
        expect(maybeFlatmappedEmpty).toBe(60);
    });
});
