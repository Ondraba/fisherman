export type AsyncFlowType<I, TPayload> = (input: I) => Promise<TPayload> | TPayload;

export type AsyncFlowEitherType<I, TPayload, TLeft> = {exec: (input: I) => Promise<TPayload> | TPayload; left?: TLeft};
