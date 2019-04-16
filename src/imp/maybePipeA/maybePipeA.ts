import {AsyncFlowType, isEmpty} from '../common';

export const maybePipeA = (...funcs: Array<AsyncFlowType<any, any>>) => (input?: any): any => {
    const res = funcs.reduce((previousTask: Promise<any>, currentTask: AsyncFlowType<any, any>) => {
        return previousTask.then((promiseResult: any) => {
            if (isEmpty(promiseResult)) {
                return Promise.resolve(undefined);
            }
            return currentTask(promiseResult);
        });
    }, Promise.resolve(input));
    return {
        isEmpty: res.then((val) => isEmpty(val)),
        valueOr: (orVal: any) => res.then((val) => (isEmpty(val) ? orVal : val)),
        value: res,
    };
};
