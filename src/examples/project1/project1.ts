import {database, Order} from './database';
import {_fish} from '../../fisherman';
import {either} from '../../imp/either';
import {reader} from '../../imp/reader';

export const Project1Service = () => ({
    createNewOrder: () =>
        _fish
            .either(new Error('create new  order error'), data.run({userName: 'admin', password: 'password', index: 2}))
            .map(checkOrderCount)
            .map(prepareOrder)
            .map(finishOrder)
            .map(getOrderFlag)
            .flatMap(mutateFlag)
            .fold(throwError, exposePayload),
});

export const data = reader(database).map((db) => db.getData());

const checkOrderCount = (order: Order) =>
    _fish
        .maybe(order)
        .map((order) => (order.count > 0 ? order : null))
        .valueOr(undefined);

const getOrderFlag = (order: Order) =>
    _fish
        .maybe(order)
        .map((order) => order.detail)
        .map((detail) => detail.flags)
        .map((flags) => flags.flagA)
        .valueOr(undefined);

const mutateFlag = (flag: string) =>
    either(new Error('mutate flag error'), flag)
        .map(extendFlag)
        .map(extendFlagAgain);

const prepareOrder = (order: Order) => {
    return {
        ...order,
        status: 'prepared',
    };
};

const finishOrder = (order: Order) => {
    return {
        ...order,
        status: 'prepared',
    };
};

const extendFlag = (flag: string) => {
    return flag + 'A';
};
const extendFlagAgain = (flag: string) => {
    return flag + 'A';
};

export const throwError = (error: any) => {
    throw error;
};

export const exposePayload = <T>(payload: T) => payload;
