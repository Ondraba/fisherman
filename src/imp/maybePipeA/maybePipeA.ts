import {AsyncFlowType} from '../common';

export const maybePipeA = (...funcs: Array<AsyncFlowType<any, any>>) => (input?: any): any => {
    const res = funcs.reduce((previousTask: Promise<any>, currentTask: AsyncFlowType<any, any>) => {
        return previousTask.then((promiseResult: any) => {
            if (promiseResult === null || promiseResult === undefined) {
                return Promise.resolve(undefined);
            }
            return currentTask(promiseResult);
        });
    }, Promise.resolve(input));
    return {
        isEmpty: res.then((val) => val === undefined || val === null),
        valueOr: (orVal: any) => res.then((val) => (val === undefined || val === null ? orVal : val)),
        value: res,
    };
};
