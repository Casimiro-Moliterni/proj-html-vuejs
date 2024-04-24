<script>
import { store } from '../store.js';

export default {
    name: 'singleCard',
    data() {
        return {
            store,
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
    <div class="single-card">
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
                <h3>{{ store.MovieList[0].name }}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[0].category }}</span>
            </div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[0].views }}</div>
        </div>
    </div>
    <!-- //////////////////// -->
    <div class="single-card active">
        <div class="overlay active"></div>
        <!-- img  -->
        <div class="image ">
            <img :src="getImageUrl(store.MovieList[1].imageXL)" alt="">
            <!-- testo  -->
            <div class="wrap-star ">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap ">
                <h3>{{ store.MovieList[1].name }}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[1].category }}</span>
            </div>
            <div class="details left active">details</div>
            <div class="details right active">view {{ store.MovieList[1].views }}</div>
        </div>
    </div>
    <!-- //////////////////// -->

    <div class="single-card">
        <div class="overlay"></div>
        <!-- img  -->
        <div class="image">
            <img :src="getImageUrl(store.MovieList[2].imageXL)" alt="">
            <!-- testo  -->

            <div class="wrap-star">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap">
                <h3>{{ store.MovieList[2].name }}</h3>
                <span><strong>Category:</strong></span>
                <span>{{ store.MovieList[2].category }}</span>
            </div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[2].views }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

.single-card {
    border-radius: 20px;
    height: 480px;
    position: relative;
    border: none;
    color: white;
    width: calc(100% / 3);
    &.active {
        height: 580px;
        opacity: 1;
        img {
            opacity: 0.5;
        }
    }
    .overlay {
        border-radius: 20px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.6);
        z-index: 22;
        &.active{z-index: 0;}
    }

    .image {
        position: relative;
        height: 100%;
        width: 100%;
        border: none;
       
        img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;
        }

        .wrap-star {
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
            padding: 0 10px;
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

        .details {
            position: absolute;
            bottom: 17px;
            padding: 8px 20px;
            background-color: $brand_secondary;
            z-index: 33;
            color: #2D2E2F;
            &.active{color: white;}
            font-weight: 700;
            &.left {
                left: 0;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }

            &.right {
                right: 0;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }
        }
    }
}
</style>