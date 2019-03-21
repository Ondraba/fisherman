# fisherman

Typescript library for easier and more understandable functional programming.

## Getting Started

npm install --save fisherman

## Examples: 

 ```const result = await _fish.composeA(
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            function3P,
            (payload: number) =>
                _fish
                    .cond(payload)
                    .set(payload === falseCondition1, functionIncPayload(10), false, true)
                    .set(payload === trueCondition2, () => functionIncPayload(20)(payload))
                    .set(payload === falseCondition3, functionIncPayload(30), false, true)
                    .done(),
            function3P,
            function3P,
            function3P,
            function3P,
            function2,
            function1P,
        )(mockData);
```

## Running the tests

npm run test


## Authors

* **Ondrej Basista** 


