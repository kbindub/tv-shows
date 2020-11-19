import axios from 'axios';
import { getListOfShows,getShowsBasedOnsearch, getShowDetailsBasedOnId} from '@/services/tvShowsApi.js';

jest.mock('axios');

describe('getListOfShows', () => {
    it('Should fetch showslist successfully from an API', async () => {
      const data = [{"name" : "test"}, {"name" : "testing"}];   
      axios.get.mockImplementationOnce(() => Promise.resolve(data));  
      await expect(getListOfShows()).resolves.toEqual(data);
    });

    it('Should fetch showslist based on searchkey', async () => {
        const data = [{"name" : "test"}, {"name" : "testing"}];   
        axios.get.mockImplementationOnce(() => Promise.resolve(data));  
        await expect(getShowsBasedOnsearch()).resolves.toEqual(data);
    });

    it('Should fetch a show details based on id', async () => {
        const data = {"name" : "test"};   
        axios.get.mockImplementationOnce(() => Promise.resolve(data));  
        await expect(getShowDetailsBasedOnId()).resolves.toEqual(data);
    });
});