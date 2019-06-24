export const getOrArray = <TOrval>(orVal: TOrval) => <TArr>(arr: TArr[]) => {
    if(arr.length > 0 || arr === undefined || arr === null){
        return arr;
    }
    return orVal;
}