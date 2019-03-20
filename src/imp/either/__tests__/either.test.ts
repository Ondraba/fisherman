import {_fish} from '../../../fisherman';

describe('Either monad tests', () => {
    //LEFT
    it('Test either left is empty', async () => {
        const eitherLeftIsNull = _fish.either(null, 50);
        const eitherLeftIsNotNull = _fish.either(50, null);
        const result1 = eitherLeftIsNull.isLeft;
        const result2 = eitherLeftIsNotNull.isLeft;
        expect(result1).toBe(true);
        expect(result2).toBe(false);
    });
    //RIGHT
    it('Test either right is empty', async () => {
        const eitherRightIsNull = _fish.either(50, null);
        const eitherRightIsNotNull = _fish.either(null, 50);
        const result1 = eitherRightIsNull.isRight;
        const result2 = eitherRightIsNotNull.isRight;
        expect(result1).toBe(true);
        expect(result2).toBe(false);
    });

    //MAP
    it('Test either map with non null right', async () => {
        const maybeNonNull = _fish.either(null, 0)
            .map((val) => val + 100)
            .map((val) =>val * 2)
            .fold((val) => `error happened with ${val}`, (val) => val);
        expect(maybeNonNull).toBe(200);
    });
    it('Test either map with null right', async () => {
        const errorMessage = 'some left error'
        const maybeNonNull = _fish.either(errorMessage, 0)
            .map((val) => val + 100)
            .map(() => undefined)
            .map((val) => val + 100)
            .fold((val) => `error happened with ${val}`, (val) => val);
        expect(maybeNonNull).toBe(`error happened with ${errorMessage}`);
    });

    it('Test either map with folded either inside', async () => {
        const errorMessage = 'some left error';
        const eitherFnWithFold = (val:number) => _fish.either(errorMessage,val).map((val) => val).fold((val) => val, (val) => val * 2);
        const maybeNonNull = _fish.either(null, 0)
            .map((val) => val + 100)
            .map((val) =>val * 2)
            .map(eitherFnWithFold)
            .fold((val) => `eefeth ${val}`, (val) => val);
        expect(maybeNonNull).toBe(400);
    });

    // FLATMAP
    it('Test either flatmap', async () => {
        const eitherFn = (val:number) => _fish.either(null,val).map((val) => val * 100);
        const maybeNonNull = _fish.either(null, 0)
            .map((val) => val + 100)
            .map((val) =>val * 2)
            .flatMap(eitherFn)
            .fold((val) => `error happened with ${val}`, (val) => val);
        expect(maybeNonNull).toBe(20000);
    });
    it('Test either flatmap with empty value inside', async () => {
        const insertedEitherError = 'insert either error';
        const eitherFn = (val:number) => _fish.either(insertedEitherError,val).map(() => undefined).map((val) => val + 10);
        const maybeNonNull = _fish.either(null, 0)
            .map((val) => val + 100)
            .map((val) =>val * 2)
            .flatMap(eitherFn) // kdyz tato fce rozbije flow, je korektni, ze je kazda nasledujici chyba derivatem teto
            .map((val) =>val * 2)
            .fold((val) => `error happened with ${val}`, (val) => val);
        expect(maybeNonNull).toBe(`error happened with ${insertedEitherError}`);
    });
    it('Test either map with empty value before conditional flatMap with custom error result', async () => {
        const errorMessage = 'some left error'
        const customErrorMessage = 'custom error';
        const maybeNonNull = _fish.either(errorMessage, 0)
            .map((val) => val + 51)
            .flatMap((val) =>  val > 50 ? _fish.either(customErrorMessage,undefined): _fish.either(undefined, val))
            .fold((val) => `error happened with ${val}`, (val) => val);
        expect(maybeNonNull).toBe(`error happened with ${customErrorMessage}`);
    });
    it('Test either flatMap with new either result inside and with empty map after' , async () => {
        const errorMessage = 'some left error'
        const customErrorMessage = 'custom error';
        const someNewEitherErrorMessage = 'some new either error value';
        const maybeNonNull = _fish.either(errorMessage, 0)
            .map((val) => val + 49)
            .flatMap((val) =>  val > 50 ? _fish.either(customErrorMessage,undefined): _fish.either(someNewEitherErrorMessage, val))
            .map(() => undefined)
            .fold((val) => `error happened with ${val}`, (val) => val);
        expect(maybeNonNull).toBe(`error happened with ${someNewEitherErrorMessage}`);
    });

    it('Test either flatMap with new either result inside', async () => {
        const errorMessage = 'some left error'
        const customErrorMessage = 'custom error';
        const someNewEitherErrorMessage = 'some new either error value';
        const result = 49;
        const maybeNonNull = _fish.either(errorMessage, 0)
            .map((val) => val + 49)
            .flatMap((val) =>  val > 50 ? _fish.either(customErrorMessage,undefined): _fish.either(someNewEitherErrorMessage, val))
            .fold((val) => `error happened with ${val}`, (val) => val);
        expect(maybeNonNull).toBe(result);
    });
});
