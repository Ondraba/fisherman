import {database, Order} from './database';
import {_fish} from '../../fisherman';
import {DatabaseConnectionArgs} from '../project1/database';

export const Project3Service = () => ({
    createNewOrder: () =>
        _fish
            .maybePipeA(
                getDataFromDb,
                checkOrderCount,
                prepareOrder,
                _fish.inject(() => console.log('order prepared'), false),
                (payload) =>
                    _fish
                        .cond(payload)
                        .set(payload.count > 10, nullCount, false, true)
                        .set(payload.count === 0, () => addMinCount(payload))
                        .set(payload.count > 99, logOverCount, true, true)
                        .done(),
                finishOrder,
                getOrderFlag,
                mutateFlag,
            )({userName: 'admin', password: 'password', index: 2})
            .valueOr('ORDER FAILED'),
});

export const getDataFromDb = async (credentials: DatabaseConnectionArgs) => await database(credentials).getData();

export const logOverCount = (order: Order) => {
    console.log(`overCount in ${JSON.stringify(order)}`);
    return order;
};

const mutateFlag = (flag: string) =>
    _fish
        .eitherPipeA({exec: extendFlag, left: 'extend flag error'}, {exec: extendFlagAgain, left: 'extend flag error again'})(flag)
        .propagate((error: any) => console.log(error));

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

export const nullCount = (order: Order) => {
    return {
        ...order,
        count: 0,
    };
};

export const addMinCount = (order: Order) => {
    return {
        ...order,
        count: 1,
    };
};
