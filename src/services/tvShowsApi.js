import axios from 'axios';

const baseURL = 'http://api.tvmaze.com';

 function getListOfShows(){
    let url = `${baseURL}/shows`;
    return axios.get(url);
}

function getShowsBasedOnsearch(searchKey){
    let url = `${baseURL}/search/shows?q=${searchKey}`;
    return axios.get(url);
}

function getShowDetailsBasedOnId(showId){
    let url = `${baseURL}/shows/${showId}?embed=cast`;
    return axios.get(url);
}

export { getListOfShows, getShowsBasedOnsearch, getShowDetailsBasedOnId};
