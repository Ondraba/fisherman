export type AsyncFlowType<I, TPayload> = (input: I) => Promise<TPayload> | TPayload;
