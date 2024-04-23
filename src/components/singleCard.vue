<script>
import { store } from '../store.js';

export default {
    name: 'singleCard',
    data() {
        return {
            store,
        }
    },
    props: {
        cardInfo: Object
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
                <div>category</div>
            </div>
            <div class="details left">details</div>
            <div class="details right">view {{ store.MovieList[0].views }}</div>
        </div>
    </div>
    <!-- //////////////////// -->
    <div class="single-card active">
        <!-- img  -->
        <div class="image">
            <img :src="getImageUrl(store.MovieList[1].imageXL)" alt="">
            <!-- testo  -->
            <div class="wrap-star active">
                <i class="fa-solid fa-star"></i>
                <div>0/0</div>
            </div>
            <!-- text wrap  -->
            <div class="text-wrap active">
                <h3>{{ store.MovieList[1].name }}</h3>
                <div>category</div>
            </div>
            <div class="details left active">details</div>
            <div class="details right active">view {{ store.MovieList[1].views }}</div>
        </div>
    </div>
    <!-- //////////////////// -->

    <div class="single-card">
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
                    <div>category</div>
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
    opacity: 0.5;
    &.active {
        height: 580px;
        opacity: 1;
        img{opacity: 0.5;}
    }

    .image {
        position: relative;
        height: 100%;

        img {
            height: 100%;
            border-radius: 20px;
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
        bottom: 20%;
        left: 0;
        color: red;
    }

    .details {
        position: absolute;
        bottom: 17px;
        padding: 8px 20px;
        background-color: $brand_secondary;

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