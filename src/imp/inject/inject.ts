export const inject = <T, R>(fn: (input?: any) => void, resolveWithPayload: boolean, resolveArgs?: T) => (payload: R): R => {
    resolveWithPayload ? fn(payload) : resolveArgs ? fn(resolveArgs) : fn();
    return payload;
};
