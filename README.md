# fisherman

Typescript library for easier and more understandable functional programming.

## Getting Started

npm install --save fisherman

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

## Running the tests

npm run test

## TODOS

- native async-ready monads
- memoization

## Authors

* **Ondrej Basista** 


