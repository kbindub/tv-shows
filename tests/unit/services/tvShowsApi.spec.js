import axios from 'axios';
import { getListOfShows,getShowsBasedOnsearch, getShowDetailsBasedOnId} from '@/services/tvShowsApi.js';
import { showsList, showDetails } from '../testData'

jest.mock('axios');

describe('getListOfShows', () => {
    it('Should fetch showslist successfully from an API', async () => {   
      axios.get.mockImplementationOnce(() => Promise.resolve(showsList));  
      await expect(getListOfShows()).resolves.toEqual(showsList);
    });

    it('Should fetch showslist based on searchkey', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(showsList));  
        await expect(getShowsBasedOnsearch()).resolves.toEqual(showsList);
    });

    it('Should fetch a show details based on id', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(showDetails));  
        await expect(getShowDetailsBasedOnId()).resolves.toEqual(showDetails);
    });
});