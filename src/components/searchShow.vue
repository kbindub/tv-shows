<template>
    <div>
    <div class="container mt-2">
      <div>
        <div class="card border-light">
          <div class="card-body">
            <div class="row">
              <template v-if="getShowsBasedOnSearch.length > 0">
              <div class="col-sm-3" v-for="show in getShowsBasedOnSearch" :key="show.id">
                <div class="card border-light mb-3">
                    <a :href="`#/details/${show.show.id}`">                    
                        <template v-if="show.show.image">
                            <img class="card-img-top" :src="show.show.image.medium" alt="Card image">
                        </template> 
                        <template v-else>
                            <img class="card-img-top" src="@/asserts/NoImage.png" alt="Card image">
                        </template>                  
                    </a> 
                    <div class="card-body">
                        <p class="card-title text-center">{{show.show.name}}</p>
                    </div>              
                </div>
              </div>
              </template>
              <template v-else>
                <div class="text-center">
                  <h4>No Data Found With Search</h4>
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
    name : "searchShow",
    computed:{
        getShowsBasedOnSearch(){
            return this.$store.getters.getShowsBasedOnSearch;
        }
    },
    mounted(){
        this.$store.dispatch("getShowsBasedOnsearchAction", this.$route.params.searchkey);
    },
    watch:{
      '$route.params.searchkey': function () {
          this.$store.dispatch("getShowsBasedOnsearchAction", this.$route.params.searchkey);
      }
    }
}
</script>