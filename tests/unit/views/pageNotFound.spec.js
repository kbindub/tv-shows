import { shallowMount, createLocalVue } from '@vue/test-utils'
import PageNotFound from '../../../src/views/pageNotFound.vue'

describe("Inside PageNotFound.vue component", () => {
    let pageNotFoundWrapper;
    beforeEach( () => {
        const localVue = createLocalVue();
        pageNotFoundWrapper = shallowMount(PageNotFound, {
            localVue
        });
    });
    afterEach( () => {
        pageNotFoundWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(pageNotFoundWrapper.isVueInstance).toBeTruthy();
    });
});