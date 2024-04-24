<script>
import { store } from '../store.js';

export default{
    name:'CardMovie',
    data(){
        return{
            store
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href;
        },
    }
}
</script>

<template>
 
 <div class="card-movie">
    <div class="overlay"></div>
      <!-- img  -->
      <div class="image">
            <img :src="getImageUrl(store.MovieList[0].imageXL)" alt="">
            <!-- testo  -->

            <div class="wrap-star">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap">
                <h3>{{ store.MovieList[0].name}}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[0].category }}</span>
            </div>
            <div class="top-hover">2.30.00</div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[0].views }}</div>
        </div>
 </div>
 <!-- ////////////////////////////////////// -->
 <div class="card-movie">
    <div class="overlay"></div>
      <!-- img  -->
      <div class="image">
            <img :src="getImageUrl(store.MovieList[5].imageXL)" alt="">
            <!-- testo  -->

            <div class="wrap-star">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap">
                <h3>{{ store.MovieList[5].name}}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[5].category }}</span>
            </div>
            <div class="top-hover">2.30.00</div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[5].views }}</div>
        </div>
 </div>
 <!-- ////////////////////////////////////// -->

 <div class="card-movie">
    <div class="overlay"></div>
      <!-- img  -->
      <div class="image">
            <img :src="getImageUrl(store.MovieList[3].imageXL)" alt="">
            <!-- testo  -->

            <div class="wrap-star">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap">
                <h3>{{ store.MovieList[3].name}}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[3].category }}</span>
            </div>
            <div class="top-hover">2.30.00</div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[3].views }}</div>
        </div>
 </div>
 <!-- ////////////////////////////////////// -->

 <div class="card-movie">
    <div class="overlay"></div>
      <!-- img  -->
      <div class="image">
            <img :src="getImageUrl(store.MovieList[6].imageXL)" alt="">
            <!-- testo  -->

            <div class="wrap-star">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap">
                <h3>{{ store.MovieList[6].name}}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[6].category }}</span>
            </div>
            <div class="top-hover">2.30.00</div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[6].views }}</div>
        </div>
 </div>
 <!-- ////////////////////////////////////// -->

 <div class="card-movie">
    <div class="overlay"></div>
      <!-- img  -->
      <div class="image">
            <img :src="getImageUrl(store.MovieList[7].imageXL)" alt="">
            <!-- testo  -->

            <div class="wrap-star">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap">
                <h3>{{ store.MovieList[7].name}}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[7].category }}</span>
            </div>
            <div class="top-hover">2.30.00</div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[7].views }}</div>
        </div>
 </div>
 <!-- ////////////////////////////////////// -->

 <div class="card-movie">
    <div class="overlay"></div>
      <!-- img  -->
      <div class="image">
            <img :src="getImageUrl(store.MovieList[1].imageXL)" alt="">
            <!-- testo  -->

            <div class="wrap-star">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap">
                <h3>{{ store.MovieList[1].name}}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[1].category }}</span>
            </div>
            <div class="top-hover">2.30.00</div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[1].views }}</div>
        </div>
 </div>

</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;
  .card-movie {
    position: relative;
    border: none;
    color: white;
    width: calc((100% / 3) - 25px);
    margin: 12px;
    height: 520px;
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba($color: #000000, $alpha: 0.4);
        z-index: 44;
    }
        .image {
        position: relative;
        height: 100%;
        width: 100%;
        border: none;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wrap-star {
            z-index: 111;
            display: flex;
            align-items: center;
            padding: 30px 10px;
            position: absolute;
            top: 0;
            right: 0;

            i {
                color: $brand_primary;
            }
        }

        .text-wrap {
            z-index: 111;
            padding: 0 20px;
            position: absolute;
            bottom: 17%;
            left: 0;
            
            :nth-child(2) {
                font-size: 18px;
            }

            span {
                margin-right: 10px;
            }

            h3 {
                padding-bottom: 20px;
                font-size: 22px;
                font-weight: 700;
            }
        }
        .top-hover{
                        position: absolute;
                        top: 15px;
                        left: 0;
                        padding: 8px 20px;
                        font-weight: 700;
                        background-color: $brand_primary;
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                        display: none;
                        color: white;
                        z-index: 111;
                   }
        .details {
            position: absolute;
            bottom: 17px;
            padding: 8px 20px;
            background-color: $brand_secondary;
            z-index: 33;
            font-weight: 700;
            &.left {
                z-index: 111;
                left: 0;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }

            &.right {
                z-index: 111;
                right: 0;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }
         }
    }
    }

    .card-movie:hover .overlay{
                position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    // background: -webkit-radial-gradient(top center, ellipse cover, rgba(21, 219, 77, 0.6) 10%,rgba(0,0,0,0.5) 100%);
                    background: rgb(11,163,31);
                   background: linear-gradient(180deg, rgba(11,163,31,0.5) 11%, rgba(0,0,0,0.8) 96%, rgba(2,0,36,0.8) 100%);
                    z-index: 2;
            }
    
.card-movie:hover .top-hover{
    display: block;
}
</style>