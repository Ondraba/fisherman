export type IReader<T, R> = {
    new: (fn: (args: T) => R) => IReader<T, R>;
    run(args: T): R;
    map: <U>(mapFn: (args: R) => U) => IReader<T, U>;
    flatMap: <U>(mapFn: (args: R) => IReader<T, U>) => IReader<T, U>;
};

export const reader = <T, R>(fn: (args: T) => R): IReader<T, R> => {
    return {
        new: (fn: (args: T) => R) => reader<T, R>(fn),
        run: (args: T) => fn(args),
        map: <U>(mapFn: (args: R) => U) => reader((payload) => mapFn(reader(fn).run(payload))),
        flatMap: <U>(mapFn: (args: R) => IReader<T, U>) => reader((payload) => mapFn(reader(fn).run(payload)).run(payload)),
    };
};
