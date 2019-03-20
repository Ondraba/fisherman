type AsyncFlowType<I, TPayload> = (input: I) => Promise<TPayload> | TPayload;

export interface Pretyped {
    composeA<T0, T1, T2>(fn1: AsyncFlowType<T1, T2>, fn2: AsyncFlowType<T0, T1>): (input?: T0) => (x: T0) => T2;

    composeA<T0, T1, T2, T3>(fn1: AsyncFlowType<T2, T3>, fn2: AsyncFlowType<T1, T2>, fn3: AsyncFlowType<T0, T1>): (input?: T0) => (x: T0) => T3;

    composeA<T0, T1, T2, T3, T4>(
        fn1: AsyncFlowType<T3, T4>,
        fn2: AsyncFlowType<T2, T3>,
        fn3: AsyncFlowType<T1, T2>,
        fn4: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T4;

    composeA<T0, T1, T2, T3, T4, T5>(
        fn1: AsyncFlowType<T4, T5>,
        fn2: AsyncFlowType<T3, T4>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T1, T2>,
        fn5: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T5;

    composeA<T0, T1, T2, T3, T4, T5, T6>(
        fn1: AsyncFlowType<T5, T6>,
        fn2: AsyncFlowType<T4, T5>,
        fn3: AsyncFlowType<T3, T4>,
        fn4: AsyncFlowType<T2, T3>,
        fn5: AsyncFlowType<T1, T2>,
        fn6: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T6;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7>(
        fn1: AsyncFlowType<T6, T7>,
        fn2: AsyncFlowType<T5, T6>,
        fn3: AsyncFlowType<T4, T5>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T2, T3>,
        fn6: AsyncFlowType<T1, T2>,
        fn7: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T7;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
        fn1: AsyncFlowType<T7, T8>,
        fn2: AsyncFlowType<T6, T7>,
        fn3: AsyncFlowType<T5, T6>,
        fn4: AsyncFlowType<T4, T5>,
        fn5: AsyncFlowType<T3, T4>,
        fn6: AsyncFlowType<T2, T3>,
        fn7: AsyncFlowType<T1, T2>,
        fn8: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T8;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        fn1: AsyncFlowType<T8, T9>,
        fn2: AsyncFlowType<T7, T8>,
        fn3: AsyncFlowType<T6, T7>,
        fn4: AsyncFlowType<T5, T6>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T3, T4>,
        fn7: AsyncFlowType<T2, T3>,
        fn8: AsyncFlowType<T1, T2>,
        fn9: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T9;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
        fn1: AsyncFlowType<T9, T10>,
        fn2: AsyncFlowType<T8, T9>,
        fn3: AsyncFlowType<T7, T8>,
        fn4: AsyncFlowType<T6, T7>,
        fn5: AsyncFlowType<T5, T6>,
        fn6: AsyncFlowType<T4, T5>,
        fn7: AsyncFlowType<T3, T4>,
        fn8: AsyncFlowType<T2, T3>,
        fn9: AsyncFlowType<T1, T2>,
        fn10: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T10;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
        fn1: AsyncFlowType<T10, T11>,
        fn2: AsyncFlowType<T9, T10>,
        fn3: AsyncFlowType<T8, T9>,
        fn4: AsyncFlowType<T7, T8>,
        fn5: AsyncFlowType<T6, T7>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T4, T5>,
        fn8: AsyncFlowType<T3, T4>,
        fn9: AsyncFlowType<T2, T3>,
        fn10: AsyncFlowType<T1, T2>,
        fn11: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T11;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
        fn1: AsyncFlowType<T11, T12>,
        fn2: AsyncFlowType<T10, T11>,
        fn3: AsyncFlowType<T9, T10>,
        fn4: AsyncFlowType<T8, T9>,
        fn5: AsyncFlowType<T7, T8>,
        fn6: AsyncFlowType<T6, T7>,
        fn7: AsyncFlowType<T5, T6>,
        fn8: AsyncFlowType<T4, T5>,
        fn9: AsyncFlowType<T3, T4>,
        fn10: AsyncFlowType<T2, T3>,
        fn11: AsyncFlowType<T1, T2>,
        fn12: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T12;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
        fn1: AsyncFlowType<T12, T13>,
        fn2: AsyncFlowType<T11, T12>,
        fn3: AsyncFlowType<T10, T11>,
        fn4: AsyncFlowType<T9, T10>,
        fn5: AsyncFlowType<T8, T9>,
        fn6: AsyncFlowType<T7, T8>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T5, T6>,
        fn9: AsyncFlowType<T4, T5>,
        fn10: AsyncFlowType<T3, T4>,
        fn11: AsyncFlowType<T2, T3>,
        fn12: AsyncFlowType<T1, T2>,
        fn13: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T13;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(
        fn1: AsyncFlowType<T13, T14>,
        fn2: AsyncFlowType<T12, T13>,
        fn3: AsyncFlowType<T11, T12>,
        fn4: AsyncFlowType<T10, T11>,
        fn5: AsyncFlowType<T9, T10>,
        fn6: AsyncFlowType<T8, T9>,
        fn7: AsyncFlowType<T7, T8>,
        fn8: AsyncFlowType<T6, T7>,
        fn9: AsyncFlowType<T5, T6>,
        fn10: AsyncFlowType<T4, T5>,
        fn11: AsyncFlowType<T3, T4>,
        fn12: AsyncFlowType<T2, T3>,
        fn13: AsyncFlowType<T1, T2>,
        fn14: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T14;

    composeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(
        fn1: AsyncFlowType<T14, T15>,
        fn2: AsyncFlowType<T13, T14>,
        fn3: AsyncFlowType<T12, T13>,
        fn4: AsyncFlowType<T11, T12>,
        fn5: AsyncFlowType<T10, T11>,
        fn6: AsyncFlowType<T9, T10>,
        fn7: AsyncFlowType<T8, T9>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T6, T7>,
        fn10: AsyncFlowType<T5, T6>,
        fn11: AsyncFlowType<T4, T5>,
        fn12: AsyncFlowType<T3, T4>,
        fn13: AsyncFlowType<T2, T3>,
        fn14: AsyncFlowType<T1, T2>,
        fn15: AsyncFlowType<T0, T1>,
    ): (input?: T0) => (x: T0) => T15;

    pipeA<T0, T1, T2>(fn1: AsyncFlowType<T0, T1>, fn2: AsyncFlowType<T1, T2>): (input?: T0) => (x: T0) => T2;

    pipeA<T0, T1, T2, T3>(fn1: AsyncFlowType<T0, T1>, fn2: AsyncFlowType<T1, T2>, fn3: AsyncFlowType<T2, T3>): (input?: T0) => (x: T0) => T3;

    pipeA<T0, T1, T2, T3, T4>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
    ): (input?: T0) => (x: T0) => T4;

    pipeA<T0, T1, T2, T3, T4, T5>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
    ): (input?: T0) => (x: T0) => T5;

    pipeA<T0, T1, T2, T3, T4, T5, T6>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
    ): (input?: T0) => (x: T0) => T6;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
    ): (input?: T0) => (x: T0) => T7;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
    ): (input?: T0) => (x: T0) => T8;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T8, T9>,
    ): (input?: T0) => (x: T0) => T9;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T8, T9>,
        fn10: AsyncFlowType<T9, T10>,
    ): (input?: T0) => (x: T0) => T10;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T8, T9>,
        fn10: AsyncFlowType<T9, T10>,
        fn11: AsyncFlowType<T10, T11>,
    ): (input?: T0) => (x: T0) => T11;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T8, T9>,
        fn10: AsyncFlowType<T9, T10>,
        fn11: AsyncFlowType<T10, T11>,
        fn12: AsyncFlowType<T11, T12>,
    ): (input?: T0) => (x: T0) => T12;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T8, T9>,
        fn10: AsyncFlowType<T9, T10>,
        fn11: AsyncFlowType<T10, T11>,
        fn12: AsyncFlowType<T11, T12>,
        fn13: AsyncFlowType<T12, T13>,
    ): (input?: T0) => (x: T0) => T13;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T8, T9>,
        fn10: AsyncFlowType<T9, T10>,
        fn11: AsyncFlowType<T10, T11>,
        fn12: AsyncFlowType<T11, T12>,
        fn13: AsyncFlowType<T12, T13>,
        fn14: AsyncFlowType<T13, T14>,
    ): (input?: T0) => (x: T0) => T14;

    pipeA<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(
        fn1: AsyncFlowType<T0, T1>,
        fn2: AsyncFlowType<T1, T2>,
        fn3: AsyncFlowType<T2, T3>,
        fn4: AsyncFlowType<T3, T4>,
        fn5: AsyncFlowType<T4, T5>,
        fn6: AsyncFlowType<T5, T6>,
        fn7: AsyncFlowType<T6, T7>,
        fn8: AsyncFlowType<T7, T8>,
        fn9: AsyncFlowType<T8, T9>,
        fn10: AsyncFlowType<T9, T10>,
        fn11: AsyncFlowType<T10, T11>,
        fn12: AsyncFlowType<T11, T12>,
        fn13: AsyncFlowType<T12, T13>,
        fn14: AsyncFlowType<T13, T14>,
        fn15: AsyncFlowType<T14, T15>,
    ): (input?: T0) => (x: T0) => T15;
}
