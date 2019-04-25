import {AsyncFlowEitherType, isEmpty} from '../common';

export const eitherPipeA = (...funcs: Array<AsyncFlowEitherType<any, any, any>>) => (input?: any): any => {
    let currentLeft: any = undefined;
    const res = funcs.reduce((previousTask: Promise<any>, currentTask: AsyncFlowEitherType<any, any, any>) => {
        return previousTask.then((promiseResult: any) => {
            if (isEmpty(promiseResult)) {
                currentLeft = !isEmpty(currentLeft) ? currentLeft : currentTask.left;
                return Promise.resolve(undefined);
            }
            return currentTask.exec(promiseResult);
        });
    }, Promise.resolve(input));
    return {
        fold: res.then((val) => (!isEmpty(currentLeft) ? currentLeft : val)),
        propagate: (propagateFn: (res: any) => any) => res.then((val) => (!isEmpty(currentLeft) ? propagateFn(currentLeft) : val)),
    };
};
