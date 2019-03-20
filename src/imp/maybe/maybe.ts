import {isEmpty} from '../common';

export type IMaybe<T> = {
    valueOr: <U>(orVal: U) => NonNullable<T | U>;
    isEmpty: boolean;
    map: <U>(fn: (input?: T) => U) => IMaybe<U>;
    flatMap: <U>(fn: (input?: T) => IMaybe<U>) => IMaybe<U>;
};

export const maybe = <T>(currentValue?: T): IMaybe<T> => ({
    valueOr: <U>(orVal: U) => (!isEmpty(currentValue)  ? (currentValue as NonNullable<T>) : (orVal as NonNullable<U>)),
    isEmpty: isEmpty(currentValue) ? true : false,
    map: <U>(fn: (input?: T) => U) => (!isEmpty(currentValue) ? maybe<U>(fn(currentValue)) : maybe<U>()),
    flatMap: <U>(fn: (input?: T) => IMaybe<U>) => (!isEmpty(currentValue)  ? fn(currentValue) : maybe<U>()),
});