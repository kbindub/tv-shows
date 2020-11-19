import { shallowMount, createLocalVue } from '@vue/test-utils'
import FilterList from '../../../src/components/filterList.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

describe('Inside FilterList Component', () => {
    let filterListWrapper;
    const router = new VueRouter({});
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter);
        const mockStore = {
            dispatch : jest.fn(),
            getters : {
                getListOfShowsBasedOnGenres: () => { return [];},
                getShowsList: () => {return [];}
            }
        }
        filterListWrapper = shallowMount(FilterList, {
            localVue,
            router,
            mocks : {
                $store: mockStore
            }
        });
    });

    afterEach(() => {
        filterListWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(filterListWrapper.isVueInstance).toBeTruthy();
    });
})