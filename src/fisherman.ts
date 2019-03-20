import {Pretyped} from './pretyped';
import {pipeA, composeA, inject, cond, either, maybe} from './imp';

export const _fish = {
    ...({
        composeA,
        pipeA,
    } as Pretyped),
    inject,
    cond,
    either,
    maybe
};
