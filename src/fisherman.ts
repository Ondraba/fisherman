import {Pretyped} from './pretyped';
import {pipeA, composeA, inject, cond, either, maybe, reader, maybePipeA} from './imp';

export const _fish = {
    ...({
        maybePipeA,
        composeA,
        pipeA,
    } as Pretyped),
    inject,
    cond,
    either,
    maybe,
    reader,
};
