import {state,actions,mutations,getters} from '../../../src/store/index.js'
import { getListOfShows,getShowsBasedOnsearch, getShowDetailsBasedOnId} from '@/services/tvShowsApi.js';
import flushPromises from 'flush-promises'
import Vue from 'vue'
import Vuex from 'vuex'
import { showsList, showDetails, filterdData, genresList } from '../testData'

Vue.use(Vuex)
jest.mock('../../../src/services/tvShowsApi.js')

describe('In Store', () => {

    describe("Mutations Test", () => {
        it('setListOfShows sets state.listOfShows to given value', () => {
            mutations.setListOfShows(state, showsList);
            expect(state.listOfShows).toBe(showsList);
        });

        it('setShowsBasedOnSearch sets state.showsBasedOnSearch to given value', () => {
            mutations.setShowsBasedOnSearch(state, showsList);
            expect(state.showsBasedOnSearch).toBe(showsList);
        });

        it('setShowDetails sets state.showDetails to given value', () => {
            mutations.setShowDetails(state, showDetails);
            expect(state.showDetails).toBe(showDetails);
        });
    });
    
    describe("Actions Test", () => {
        const context = { commit : jest.fn()}
        let data = {data:showsList};
        it("get all shows list action", async () => {
            getListOfShows.mockImplementationOnce(() => {
                return Promise.resolve(data);
            });
            actions.getListOfShowsAction(context);
            await flushPromises();
            expect(context.commit).toHaveBeenCalledWith('setListOfShows',data.data);
        });

        it("get shows based on search action", async () => {
            getShowsBasedOnsearch.mockImplementationOnce(() => {
                return Promise.resolve(data);
            });
            actions.getShowsBasedOnsearchAction(context);
            await flushPromises();
            expect(context.commit).toHaveBeenCalledWith('setShowsBasedOnSearch',data.data);
        });

        it("get all shows list action", async () => {
            getShowDetailsBasedOnId.mockImplementationOnce(() => {
                return Promise.resolve(data);
            });
            actions.getShowDetailsBasedOnIdAction(context);
            await flushPromises();
            expect(context.commit).toHaveBeenCalledWith('setShowDetails',data.data);
        });
    });

    describe("Getters Test", () => {
        it("getShowsList should return listOfShows value from state", () => {
            mutations.setListOfShows(state, showsList);
            expect(getters.getShowsList(state)).toBe(showsList);
        });

        it("getShowsBasedOnSearch should return showsBasedOnSearch value from state", () => {
            mutations.setShowsBasedOnSearch(state, showsList);
            expect(getters.getShowsBasedOnSearch(state)).toBe(showsList);
        });

        it("getShowDetails should return showDetails value from state", () => {
            mutations.setShowDetails(state, showDetails);
            expect(getters.getShowDetails(state)).toBe(showDetails);
        });

        it("getListOfShowsBasedOnGenres should filter listOfShows based on genre", () => {
            mutations.setListOfShows(state, showsList);
            expect(JSON.stringify(getters.getListOfShowsBasedOnGenres(state) ("rating"))).toBe(JSON.stringify(showsList));
            expect(JSON.stringify(getters.getListOfShowsBasedOnGenres(state) ("Drama"))).toBe(JSON.stringify(filterdData));
        });

        it("getAllGenres should return all the unique genres from shows list", () => {
            mutations.setListOfShows(state, showsList);
            expect(JSON.stringify(getters.getAllGenres(state))).toBe(JSON.stringify(genresList));
        });
        
    });
});