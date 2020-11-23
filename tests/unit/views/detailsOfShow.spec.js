import { shallowMount, createLocalVue } from '@vue/test-utils'
import DetailsOfShow from '../../../src/views/detailsOfShow.vue'
describe('Inside DetailsOfShow.vue Component', () => {
    let detailsOfShowWrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        detailsOfShowWrapper = shallowMount(DetailsOfShow, {
            localVue
        });
    });

    afterEach(() => {
        detailsOfShowWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(detailsOfShowWrapper.isVueInstance).toBeTruthy();
    });

    it('Should have a DetailsOfShow component', () => {
        expect(detailsOfShowWrapper.html()).toContain('<details-of-show-stub></details-of-show-stub>');
    });

})