import { shallowMount, createLocalVue } from '@vue/test-utils'
import DetailsOfShow from '../../../src/components/detailsOfShow.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

describe('Inside DetailsOfShow Component', () => {
    let detailsOfShowWrapper;
    const router = new VueRouter({path: '/details/:showId'});
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        localVue.use(Vuex);
        const mockStore = {
            dispatch : jest.fn(),
            getters : {
                getShowDetails: () => { return {};}
            }
        }
        detailsOfShowWrapper = shallowMount(DetailsOfShow, {
            localVue,
            router,
            mocks : {
                $store: mockStore
            }
        });
    });

    afterEach(() => {
        detailsOfShowWrapper.destroy();
    });

    it('Is it a vue instance or not', () => {
        expect(detailsOfShowWrapper.isVueInstance).toBeTruthy();
    });

    it("Should dispatch an action", () => {
        expect(detailsOfShowWrapper.vm.$store.dispatch).toHaveBeenCalled();
    });

})