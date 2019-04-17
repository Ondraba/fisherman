# fisherman

Typescript library for easier and more understandable functional programming.

## Getting Started

npm install --save fisherman

## What is inside:
- async ready left and right composition
- reader, either and maybe monad by functions
- async ready monad inspired composition 
- helpers like composition ready IF or composition injection

## Examples:

Monads: 

 ```
import {_fish} from '../../fisherman';

export const Project2Service = () => ({
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

export const data = _fish.reader(database).map((db) => db.getData());

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
    _fish.either(new Error('mutate flag error'), flag)
        .map(extendFlag)
        .map(extendFlagAgain);

        
.......
```


Async ready composition with utils:

```
import {_fish} from '../../fisherman';

export const Project2Service = () => ({
    createNewOrder: () =>
        _fish.composeA(
            mutateFlag,
            getOrderFlag,
            (payload) =>
                _fish
                    .cond(payload)
                    .set(payload.count > 10, nullCount, false, true)
                    .set(payload.count === 0, () => addMinCount(payload))
                    .set(payload.count > 99, logOverCount, true, true)
                    .done(),
            finishOrder,
            _fish.inject(() => console.log('order prepared'), false),
            prepareOrder,
            checkOrderCount,
            getDataFromDb,
        )({userName: 'admin', password: 'password', index: 2}),
});

export const getDataFromDb = async (credentials: DatabaseConnectionArgs) => await database(credentials).getData();

export const logOverCount = (order:Order) => {
    console.log(`overCount in ${JSON.stringify(order)}`);
    return order;
}

const mutateFlag = (flag: string) => _fish.pipeA(extendFlag, extendFlagAgain)(flag);


.......
        
```  

Async ready "monad like" composition with utils:

```
createNewOrder: () =>
        _fish.maybePipeA(
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
        )({userName: 'admin', password: 'password', index: 2}).valueOr('ORDER FAILED'),

const mutateFlag = (flag: string) => _fish.eitherPipeA({exec:extendFlag, left:'extend flag error'}, {exec: extendFlagAgain,left:'extend flag error again'})(flag).propagate((error:any) => console.log(error));


.......

```

## Running the tests

npm run test

## TODOS
- memoization

## Authors

* **Ondrej Basista** 



