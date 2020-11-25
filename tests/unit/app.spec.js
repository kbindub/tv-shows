import { shallowMount, createLocalVue } from '@vue/test-utils'
import app from '../../src/app.vue'
import VueRouter from 'vue-router'

describe('Inside App.vue Component', () => {
    let appWrapper;
    const router = new VueRouter({});
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        appWrapper = shallowMount(app, {
            localVue,
            router
        });
    });

    afterEach(() => {
        appWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(appWrapper.isVueInstance).toBeTruthy();
    });

    it('Should have a div with id as app', () => {
        expect(appWrapper.attributes('id')).toBe('app');
    });

    it('Should have a router component', () => {
        expect(appWrapper.contains('router-view-stub')).toBe(true);
    });

    it('Should have a header component', () => {
        expect(appWrapper.contains('app-header-stub')).toBe(true);
    });
})