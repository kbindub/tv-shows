import Vue from 'vue'
import Vuex from 'vuex'
import { getListOfShows,getShowsBasedOnsearch, getShowDetailsBasedOnId} from '@/services/tvShowsApi.js';
Vue.use(Vuex)

export const state =  {
  listOfShows : [],
  showsBasedOnSearch : [],
  showDetails: ""
}

export const mutations = {
  SET_LISTOFSHOWS(state, value){
    state.listOfShows = value;
  },
  SET_SHOWSBASEDONSEARCH(state,value){
    state.showsBasedOnSearch = value;
  },
  SET_SHOWDETAILS(state, value){
    state.showDetails = value;
  }
}

export const actions = {
  getListOfShowsAction({ commit }){
    getListOfShows()
    .then( (result) => {
      commit('SET_LISTOFSHOWS', result.data);
    })
    .catch((error) => {
      alert("There is a problem in getting the TV Shows. "+ error);
    });      
  },

  getShowsBasedOnsearchAction({ commit }, searchKey){
    getShowsBasedOnsearch(searchKey)
    .then((result) => {
      commit('SET_SHOWSBASEDONSEARCH', result.data);
    })
    .catch((error) => {
      alert("There is a problem in getting the search data.  "+ error);
    });  
  },

  getShowDetailsBasedOnIdAction({ commit }, showId){
    getShowDetailsBasedOnId(showId)
    .then((result) => {
      commit('SET_SHOWDETAILS', result.data);
    })
    .catch((error) => {
      alert("There is a problem in getting the details." + error);
    });  
  }
}

export const getters = {
  getShowsList:(state) => {
    return state.listOfShows;
  },
  getShowsBasedOnSearch: (state) => {
    return state.showsBasedOnSearch;
  },
  getShowDetails: (state) => {
    return state.showDetails;
  },
  getListOfShowsBasedOnGenres: (state) => (genre) =>{
    let showsList = state.listOfShows;
    if(genre === 'popular'){
      showsList.sort( (show1, show2) => {
        return show2.rating.average-show1.rating.average;
      });
      return showsList;
    }
    else{
      return showsList.filter((show) =>{
        return show.genres.includes(genre)
      });
    }      
  },
  getAllGenres: (state) => {
    let showsList = state.listOfShows;
    let genresList =[];
    showsList.map((show) => genresList = [...genresList, ...show.genres]);
    return new Set(genresList);
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store;