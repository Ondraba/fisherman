import {Pretyped} from './pretyped';
import {pipeA, composeA, inject, cond, either, maybe, reader, maybePipeA, eitherPipeA, memoize, utils} from './imp';

export const _fish = {
    ...({
        maybePipeA,
        eitherPipeA,
        composeA,
        pipeA,
    } as Pretyped),
    inject,
    cond,
    either,
    maybe,
    reader,
    memoize,
    utils,
};
