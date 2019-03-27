import {Project2Service} from '../project2';

describe('Project 2 service with composition tests', () => {
    it('should test project1serviceMonads with correct result', async () => {
        const result = await Project2Service().createNewOrder();
        expect(result).toEqual('AAA');
    });
});
