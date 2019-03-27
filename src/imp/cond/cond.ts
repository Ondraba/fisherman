export type condType<T> = {
    set: <R, U>(exp: boolean, exec: (input?: U | T) => R, isVoid?: boolean, withPayload?: boolean) => ReturnType<() => condType<R | T>>;
    done: () => T;
};

export const cond = <T>(currentCondValue: T) => {
    return {
        set: <R, U>(exp: boolean, exec: (input?: U | T) => R, isVoid: boolean = false, withPayload: boolean = false): ReturnType<() => condType<R | T>> => {
            if (exp) {
                if (isVoid && withPayload) {
                    exec(currentCondValue);
                    return cond<T>(currentCondValue);
                }
                if (isVoid && !withPayload) {
                    exec();
                    return cond<T>(currentCondValue);
                }
                if (!isVoid && withPayload) {
                    return cond<R>(exec(currentCondValue));
                }
                return cond<R>(exec());
            }
            return cond<T>(currentCondValue);
        },
        done: (): T => currentCondValue,
    };
};
