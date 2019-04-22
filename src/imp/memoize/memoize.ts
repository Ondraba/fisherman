export const memoize = <I, R>(fn: (input: I) => R | Promise<R>) => {
    const argCache: {[key: string]: R} = {};
    return async (arg: I): Promise<R> => {
        const stringifiedArg = JSON.stringify(arg);
        if (!(stringifiedArg in argCache)) {
            argCache[stringifiedArg] = await fn(arg);
            return argCache[stringifiedArg];
        }
        return argCache[stringifiedArg];
    };
};