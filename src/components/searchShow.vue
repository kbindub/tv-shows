<template>
   <div>
      <div class="container mt-3">
         <div class="row ml-4">
            <a href="#/">
            <button type="button" class="btn btn-outline-dark">Back</button>
            </a>
         </div>
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
                                 <p class="card-title text-center" v-if="show.show.rating">{{show.show.name}}</p>
                                 <p class="text-center" v-if="show.show.rating && show.show.rating.average">(Rating : {{show.show.rating.average}})</p>
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