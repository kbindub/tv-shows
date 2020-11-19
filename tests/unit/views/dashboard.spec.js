import { shallowMount, createLocalVue } from '@vue/test-utils'
import Dashboard from '../../../src/views/dashboard.vue'
describe('Inside Dashboard.vue View', () => {
    let dashboardWrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        dashboardWrapper = shallowMount(Dashboard, {
            localVue
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