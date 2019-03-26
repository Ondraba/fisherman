# fisherman

Typescript library for easier and more understandable functional programming.

## Getting Started

npm install --save fisherman

## Examples: 

 ```
export const Project1Service = () => ({
    createNewOrder: () =>
        _fish
            .either(
                new Error('create new  order error'),
                data
                    .run({userName: 'admin', password: 'password', index: 2}),
            )
            .map(checkOrderCount)
            .map(prepareOrder)
            .map(finishOrder)
            .map(getOrderFlag)
            .flatMap(mutateFlag)
            .fold(
                throwError,
                exposePayload,
            ),
});

export const data = reader(database).map(db => db.getData());

const checkOrderCount = (order: Order) => _fish.maybe(order).map(order => order.count > 0 ?  order : null).valueOr(undefined);

const getOrderFlag = (order: Order) =>
    _fish
        .maybe(order)
        .map((order) => order.detail)
        .map((detail) => detail.flags)
        .map((flags) => flags.flagA)
        .valueOr(undefined);

const mutateFlag = (flag: string) => {
    return either(new Error('mutate flag error'), flag)
        .map(extendFlag)
        .map(extendFlagAgain);
};
```

## Running the tests

npm run test


## Authors

* **Ondrej Basista** 


