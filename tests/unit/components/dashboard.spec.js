import { shallowMount, createLocalVue } from '@vue/test-utils'
import Dashboard from '../../../src/components/dashboard.vue'
import Vuex from 'vuex'
import VueCarousel from 'vue-carousel';
import { BootstrapVue } from 'bootstrap-vue';

describe('Inside Dashboard Component', () => {
    let dashboardWrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueCarousel);
        localVue.use(BootstrapVue);
        const mockStore = {
            dispatch : jest.fn(),
            getters : {
                getListOfShowsBasedOnGenres: () => { return [];}
            }
        }
        dashboardWrapper = shallowMount(Dashboard, {
            localVue,
            mocks : {
                $store: mockStore
            }
        });
    });

    afterEach(() => {
        dashboardWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(dashboardWrapper.isVueInstance).toBeTruthy();
    });

    it('Should render b-col markup', () => {
        expect(dashboardWrapper.contains('b-col-stub')).toBe(true);
    });

    it("Should dispatch an action", () => {
        expect(dashboardWrapper.vm.$store.dispatch).toHaveBeenCalled();
    });
})