import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from '../../../src/components/header.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue';

describe('Inside Header Component', () => {
    let headerWrapper;
    const route = new VueRouter();
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter);
        localVue.use(BootstrapVue);
        const mockStore = {
            state:{},
            dispatch : jest.fn(),
            getters : {
                getAllGenres: () => { return [];},
                getShowsList: () => { return [];}
            }
        }
        const mockRouter = {
            push: jest.fn()
        }
        headerWrapper = shallowMount(Header, {
            localVue,
            route,
            mocks : {
                $store: mockStore,
                $router: mockRouter
            },
            data(){
                return{
                    searchKey : '',
                    filterKey: ''
                }
            }
        });
    });

    afterEach(() => {
        headerWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(headerWrapper.isVueInstance).toBeTruthy();
    }); 

    it('It should render correct markup b-dropdown', () => {
        expect(headerWrapper.contains('b-dropdown-stub')).toBe(true);
    });

    it("Should dispatch an action", () => {
        expect(headerWrapper.vm.$store.dispatch).toHaveBeenCalled();
    });

})