<template>
    <div>
    <div class="container mt-2">
      <div>
        <div class="card border-light">
          <div class="card-body">
            <div class="row">
            <template v-if="getListOfShowsBasedOnGenres.length > 0">
              <div class="col-sm-3" v-for="show in getListOfShowsBasedOnGenres" :key="show.id">
                <div class="card border-light mb-3">
                    <a :href="`#/details/${show.id}`">                    
                        <template v-if="show.image">
                            <img class="card-img-top" :src="show.image.medium" alt="Card image">
                        </template> 
                        <template v-else>
                            <img class="card-img-top" src="@/asserts/NoImage.png" alt="Card image">
                        </template>                  
                    </a> 
                    <div class="card-body">
                        <p class="card-title text-center">{{show.name}}</p>
                    </div>              
                </div>
              </div>
            </template>
            <template v-else>
                <div class="text-center">
                    <h4>No Data Found</h4>
                </div>
            </template>
            </div>
          </div>          
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
    name : "filterListView",
    computed:{
        getListOfShowsBasedOnGenres(){
            return this.$store.getters['getListOfShowsBasedOnGenres'](this.$route.params.filterkey);
        }
    },
    watch:{
      '$route.params.filterkey': function () {
          this.getListOfShowsBasedOnGenres;
      }
    }
}
</script>