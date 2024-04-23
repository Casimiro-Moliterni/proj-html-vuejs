<script>
import singleCard from './singleCard.vue';
export default {
    name: 'cardList',
    components:{
        singleCard
    }
}
</script>
<template>
    <section >
        <!-- parte inziale con testo e bottoni x carosello  -->
        <div class="container">
            <div class="text-new-movie-wrapper">
              <div class="text">
                 <h3>New Movie</h3>
                 <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
              </div>
              <div class="btn-wrapper">
                <button><i class="fa fa-chevron-left"></i></button>
                <button><i class="fa fa-chevron-right"></i></button>
              </div>
            </div>
            <!-- fine ///////////////////////////////// -->
            <div class="card-list">
                   <singleCard></singleCard>
                   <singleCard></singleCard>
                   <singleCard></singleCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

section {
    background-color: $brand_secondary ;
    min-height: 600px;
    .container{
        padding-top: 80px;
        padding-bottom:90px ;
       .text-new-movie-wrapper{
        display: flex;
        align-items: center;
        margin-bottom: 70px;
        .text{
            border-left: 3px solid $brand_primary;
            padding: 0 0 12px 12px;
            border-bottom: 1px solid #182028;
            flex-grow: 1;
        }
        .btn-wrapper{
            display: flex;
            gap: 6px;
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                border: 1px solid #182028;
                height: 35px;
                border-radius: 100%;
                background-color: inherit; 
                padding: 0 12px;
                i{color: $brand_primary; }
            }
        }
       }

       .card-list{
        display: flex;
       }
    }
}

</style>
