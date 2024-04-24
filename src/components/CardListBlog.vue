<script>
import { store } from '../store.js';
export default {
    name: 'CardListBlog',
    data() {
        return {
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
    <section>
        <div class="container">
            <div class="col left">
                <div class="card left">
                    <div class="overlay"></div>
                    <!-- img  -->
                    <div class="image">
                        <img :src="getImageUrl(store.BlogList[0].imageXL)" alt="">
                        <!-- testo  -->
                        <!-- text wrap  -->
                        <div class="text-wrap">
                            <h3 class="left">{{ store.BlogList[0].name }}</h3>
                        </div>
                        <div class="details left">details</div>
                        <div class="details right">
                            <span>Moviestar</span>
                            <span>0 Comment</span>
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="overlay"></div>
                    <!-- img  -->
                    <div class="image">
                        <img :src="getImageUrl(store.BlogList[1].imageMedium)" alt="">
                        <!-- testo  -->
                        <!-- text wrap  -->
                        <div class="text-wrap">
                            <h3>{{ store.BlogList[1].name }}</h3>
                        </div>
                        <div class="details left">details</div>
                        <div class="details right">Share</div>
                    </div>
                </div>
                <div class="card">
                    <div class="overlay"></div>
                    <!-- img  -->
                    <div class="image">
                        <img :src="getImageUrl(store.BlogList[2].imageMedium)" alt="">
                        <!-- testo  -->
                        <!-- text wrap  -->
                        <div class="text-wrap">
                            <h3>{{ store.BlogList[2].name }}</h3>
                        </div>
                        <div class="details left">details</div>
                        <div class="details right">Share</div>
                    </div>
                </div>
                <div class="card">
                    <div class="overlay"></div>
                    <!-- img  -->
                    <div class="image">
                        <img :src="getImageUrl(store.BlogList[3].imageXL)" alt="">
                        <!-- testo  -->
                        <!-- text wrap  -->
                        <div class="text-wrap">
                            <h3>{{ store.BlogList[3].name }}</h3>
                        </div>
                        <div class="details left">details</div>
                        <div class="details right">Share</div>
                    </div>
                </div>
                <div class="card">
                    <div class="overlay"></div>
                    <!-- img  -->
                    <div class="image">
                        <img :src="getImageUrl(store.BlogList[4].imageXL)" alt="">
                        <!-- testo  -->
                        <!-- text wrap  -->
                        <div class="text-wrap">
                            <h3>{{ store.BlogList[4].name }}</h3>
                        </div>
                        <div class="details left">details</div>
                        <div class="details right">Share</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

section {
    color: white;
    background-color: $brand_secondary;

    .container {
        display: flex;
 .col.left{
    margin-left: -12px;
 }

        .col {
            width: 50%;
            display: flex;
            flex-wrap: wrap;

            .card {

                position: relative;
                border: none;
                color: white;
                width: calc((100% / 2) - 25px);
                margin: 12px;
                .overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                   background-color: rgba(#0000, $alpha: 0.4);
                    z-index: 2;
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

                    .text-wrap {
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
                            font-size: 16px;
                            font-weight: 700;
                        }
                    }

                    .details {
                        position: absolute;
                        bottom: 17px;
                        padding: 8px 20px;
                        z-index: 33;
                        font-weight: 700;
                        cursor: pointer;

                        &.left {
                            background-color: $brand_secondary;
                            left: 0;
                            border-top-right-radius: 20px;
                            border-bottom-right-radius: 20px;
                        }

                        &.right {
                            right: 0;
                            border-top-left-radius: 20px;
                            border-bottom-left-radius: 20px;

                            span {
                                margin-left: 7px;
                                padding-right: 10px;
                            }
                        }
                    }
                }
            }


            .card.left {
                width: 100%;

                .text-wrap {
                    bottom: 12%;

                    .left {
                        font-size: 20px;
                    }
                }
            }

        }
    }
}
</style>