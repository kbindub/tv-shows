<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid"> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li class="nav-item"> <a class="nav-link active" href="#/">Dashboard</a> </li>
                    </ul>
                    <form  class="d-flex">
                        <b-dropdown :text="genre" class=" m-2" variant="outline-light">
                            <b-dropdown-item v-for="genre in getAllGenres" :key="genre" @click="getListOfShowsBasedOnGenres(genre)">
                                {{genre}}
                            </b-dropdown-item>   
                        </b-dropdown>
                    </form>
                    <form class="d-flex"> 
                        <input class="form-control mr-2" type="text" v-model="searchKey" placeholder="Search Shows">
                        <a class="btn btn-outline-light" :href="searchKey ? `#/search/${searchKey}`: `#/`">Search</a>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'appHeader',
    data(){
        return{
            searchKey : '',
            genre:'Select Genres'
        }
    },
    computed:{
        getAllGenres(){
            return this.$store.getters.getAllGenres;
        }
    },
    methods:{
        getListOfShowsBasedOnGenres(genre){
            this.$router.push({path : `/genres/${genre}`});
        }  
    },
    watch:{
        '$route.params': function () {
            this.searchKey = this.$route.params.searchkey?this.$route.params.searchkey:""; 
            this.genre = this.$route.params.filterkey ? this.$route.params.filterkey:'Select Genres';           
        }
    },
    mounted(){
        let showsList = this.$store.getters.getShowsList;
        if(showsList.length === 0){
            this.$store.dispatch("getListOfShowsAction");
        }
    }
}
</script>