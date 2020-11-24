<template>
   <div>
      <div class="container mt-2">
        <div>
               <h4 class="ml-3">{{heading}}</h4>
               <div>
                  <div class="container">
                      <div class="row">
                        <b-col cols="12">
                          <template v-if="getListOfShows.length>0">
                            <carousel :perPageCustom="responsive" :navigationEnabled="true" :paginationEnabled="false" navigationNextLabel="<i class='fas fa-chevron-right'></i>" navigationPrevLabel="<i class='fas fa-chevron-left'></i>">
                              <slide v-for="show in getListOfShows.slice(0,20)" :key="show.id">
                                <a :href="`#/details/${show.id}`">
                                 <div class="card border-light">
                                    <img class="card-img-top" :src="show.image.medium" alt="Card image">
                                 </div>
                                 </a>
                              </slide>
                            </carousel>
                          </template>
                          <template v-else>
                            <div class="text-center">
                              <h4>No Data Available</h4>
                            </div>
                          </template>
                           
                        </b-col>
                      </div>
                  </div>
               </div>
        </div>
      </div>
   </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
 
export default {
  name: 'dashboard',
  components:{
    Carousel,
    Slide
  },
  props:{
    heading : String,
    category : String
  },
  data(){
    return{
      responsive: [[320,2],[420,3],[750,5],[1000,7],[1200,9]]
    }
  },
  computed:{
    getListOfShows(){
      return this.$store.getters['getListOfShowsBasedOnGenres'](this.category);
    }
  },
  mounted(){
    this.$store.dispatch("getListOfShowsAction");
  }
}
</script>
