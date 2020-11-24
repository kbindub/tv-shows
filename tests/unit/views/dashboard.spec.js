import { shallowMount, createLocalVue } from '@vue/test-utils'
import Dashboard from '../../../src/views/dashboard.vue'
import Vuex from 'vuex'

describe('Inside Dashboard.vue View', () => {
    let dashboardWrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const mockStore = {
            dispatch : jest.fn(),
            getters : {
                getAllGenres: () => { return [];}
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

    it('Should have a dashboard component', () => {
        expect(dashboardWrapper.html()).toContain('<dashboard-stub heading="Popular Shows" category="rating"></dashboard-stub>');
    });

})