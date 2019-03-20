export type condType<T> = {
    set: <R>(exp: boolean, exec: (input?: T) => R, isVoid?: boolean, withPayload?: boolean) => ReturnType<() => condType<R | T>>;
    done: () => T;
};

export const cond = <T>(currentCondValue: T) => {
    return {
        set: <R>(exp: boolean, exec: (input?: T) => R, isVoid: boolean = false, withPayload: boolean = false): ReturnType<() => condType<R | T>> => {
            if (exp) {
                if (withPayload) {
                    if (isVoid) {
                        exec(currentCondValue);
                        return cond<T>(currentCondValue);
                    }
                    return cond<R>(exec(currentCondValue));
                }
                return cond<R>(exec());
            }
            return cond<T>(currentCondValue);
        },
        done: (): T => currentCondValue,
    };
};
