import {Project1Service} from '../project1';

describe('Project1 service with monads tests', () => {
    it('should test project1serviceMonads with correct result', async () => {
        const result = await Project1Service().createNewOrder();
        expect(result).toEqual('AAA');
    });
});
