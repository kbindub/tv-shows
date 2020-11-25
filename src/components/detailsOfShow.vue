<template>
   <div class="bg-light">
      <div class="container">
         <div class="row m-1 mt-3">
            <a href="#/">
            <button type="button" class="btn btn-outline-dark">Back</button>
            </a>
         </div>
         <template v-if="Object.keys(getShowDetails).length > 0">
            <div class="row">
               <div class="col-sm-3">
                  <div class="card mt-3">
                     <template v-if="getShowDetails.image">
                        <img class="card-img-top" :src="getShowDetails.image.original" alt="Card image">
                     </template>
                     <template v-else>
                        <img class="card-img-top" src="@/asserts/NoImage.png" alt="Card image">
                     </template>
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="card border-light mt-3">
                     <div class="card-body">
                        <h4 class="card-title"> Show Summary</h4>
                        <article v-html="getShowDetails.summary"></article>
                     </div>
                  </div>
               </div>
               <div class="col-sm-3">
                  <div class="card border-light mt-3">
                     <div class="card-body">
                        <h4 class="card-title">Show Details</h4>
                        <p class="mb-0"> <strong>Name : </strong>  {{getShowDetails.name}} </p>
                        <p class="mb-0"> <strong>Language : </strong>  {{getShowDetails.language}} </p>
                        <p class="mb-0"> <strong>Type : </strong>  {{getShowDetails.type}} </p>
                        <p class="mb-0"> <strong>Network : </strong>  {{getShowDetails.network.name}} </p>
                        <p  class="mb-0"> 
                           <strong>Schedule : </strong>                                 
                           <span v-for="day in getShowDetails.schedule.days" :key="day">{{day}}</span>
                           at {{getShowDetails.schedule.time}}
                        </p>
                        <p class="mb-0"> <strong>Show Type : </strong>  {{getShowDetails.type}} </p>
                        <p class="mb-0"> 
                           <strong>Genres : </strong>                                 
                           <span v-for="genre in getShowDetails.genres" :key="genre">{{genre}},  </span>
                        </p>
                        <p class="mb-0"> <strong>Status : </strong>  {{getShowDetails.status}} </p>
                        <p class="mb-0"> <strong>Rating : </strong>  {{getShowDetails.rating.average}} </p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="card border-light mt-3">
               <div class="card-body">
                  <h4 class="card-title">Cast</h4>
                  <div class="row">
                     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="cast in getShowDetails._embedded.cast" :key="cast.id">
                        <div class="card border-light">
                           <div class="text-center">
                              <template v-if="cast.person.image">
                                 <img  :src="cast.person.image.medium" alt="Card image">
                                 <div class="text-center mt-1">
                                    <p class="mb-0">{{cast.person.name}}</p>
                                    <p >({{cast.character.name}})</p>
                                 </div>
                              </template>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </template>
      </div>
   </div>
</template>
<script>
export default {
   name:"detailsOfShow",
   computed:{
      getShowDetails(){
         return this.$store.getters.getShowDetails;    
      }
   },
   mounted(){
     this.$store.dispatch("getShowDetailsBasedOnIdAction", this.$route.params.showId);
   },
   watch: {     
      '$route.params.showId': function () {
         this.$store.dispatch("getShowDetailsBasedOnIdAction", this.$route.params.showId);
      }
   }
}
</script>
