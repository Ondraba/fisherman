
const lens = <TGetterTarget, TSetterTarget, TGetterPayload, TSetterPayload, TSetterValue>(getFn:(target: TGetterTarget) => TGetterPayload, setFn:(value: TSetterValue, target: TSetterTarget) => TSetterPayload) => ({
    get: (target:TGetterTarget) => getFn(target),
    set: (value:TSetterValue, target:TSetterTarget) => setFn(value, target),
})

const getProp = <TObj extends {[key: string]: any}>(prop:string) => (obj: TObj) => obj[prop];
const shallowProp = <TObj extends {[key: string]: any}, TValue>(prop:string, value:TValue) => (obj: TObj) => {
    return {
        ...obj,
        prop: value,
    }
}


const lensProp = lens(getProp("a"), shallowProp("a", 25));

type Typ = {
    pes: number,
}

const map1 = (target:Typ) => target.pes;
const map2 = (value: 66, target:any) => target;


const fest = lens(map1, map2).get({pes:10});