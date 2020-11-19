import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchShow from '../../../src/components/searchShow.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

describe('Inside SearchShow Component', () => {
    let searchShowWrapper;
    const router = new VueRouter({});
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter);
        const mockStore = {
            dispatch : jest.fn(),
            getters : {
                getShowsBasedOnSearch: () => { return [];}
            }
        }
        searchShowWrapper = shallowMount(SearchShow, {
            localVue,
            router,
            mocks : {
                $store: mockStore
            }
        });
    });

    afterEach(() => {
        searchShowWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(searchShowWrapper.isVueInstance).toBeTruthy();
    });
})