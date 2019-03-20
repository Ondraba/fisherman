import {AsyncFlowType} from '../common';

export const pipeA = (...funcs: Array<AsyncFlowType<any, any>>) => (input?: any): any => {
    return funcs.reduce((previousTask: Promise<any>, currentTask: AsyncFlowType<any, any>) => {
        return previousTask.then((promiseResult: any) => currentTask(promiseResult));
    }, Promise.resolve(input));
};
