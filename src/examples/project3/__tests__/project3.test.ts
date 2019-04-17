import {Project3Service} from '../project3';

describe('Project 3 service with monad like composition tests', () => {
    it('should test project3  with correct result', async () => {
        const result = await Project3Service().createNewOrder();
        expect(result).toEqual('AAA');
    });
});
