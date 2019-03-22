import {isEmpty} from '../common';

export type IEither<L, R> = {
    isRight: boolean;
    isLeft: boolean;
    map: <U>(fn: (input?: R) => U) => IEither<L, U>;
    flatMap: <U>(fn: (input?: R) => IEither<L, U>) => IEither<L, U>;
    fold: <U, V>(leftFn: (left: L) => U, rightFn: (right: R) => V) => U | V;
};
export const either = <L, R>(left?: L, right?: R): IEither<L, R> => ({
    isRight: isEmpty(right),
    isLeft: isEmpty(left),
    map: <U>(fn: (input?: R) => U) => (!isEmpty(right) ? either<L, U>(left, fn(right)) : either<L, U>(left, undefined)),
    flatMap: <U>(fn: (input?: R) => IEither<L, U>) => (!isEmpty(right) ? fn(right) : either<L, U>(left, undefined)), // aka chain
    fold: <U, V>(leftFn: (left?: L) => U, rightFn: (right?: R) => V) => (!isEmpty(right) ? rightFn(right) : leftFn(left)),
});
