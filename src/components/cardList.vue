<script>
import singleCard from './singleCard.vue';
import CardMovie from './CardMovie.vue';
import { store } from '../store.js';
export default {
    name: 'cardList',
    components: {
        singleCard,
        CardMovie,
    },
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
    <section id="card-list">
        <!-- parte inziale con testo e bottoni x carosello  -->
        <div class="container p-b-90">
            <div class="text-new-movie-wrapper">
                <div class="text">
                    <h3>New Movie</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div class="btn-wrapper">
                    <button><i class="fa fa-chevron-left"></i></button>
                    <button><i class="fa fa-chevron-right"></i></button>
                </div>
            </div>
            <!-- fine ///////////////////////////////// -->
            <div class="card-list">
                <single-card></single-card>
            </div>
            <div class="text-new-movie-wrapper">
                <div class="text">
                    <h3>Movie Playlist</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
            <div class="wrapper-youtube">
                <div class="row-left">
                    <iframe width="100%" height="550px"
                        src="https://www.youtube.com/embed/BP0k4SdquG0?si=hml7-23xvhH1U0jg" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <!-- fine row left ///////////  -->
                <div class="row-right">
                    <!-- title  -->
                    <div class="title">
                        <h3>New Movie</h3>
                        <div>Plying 24</div>
                    </div>
                    <!-- container card  -->
                    <div class="wrapper-card">
                        <div class="card" v-for="card in store.MovieList">
                            <!-- img  -->
                            <div class="image">
                                <img :src="getImageUrl(card.imageSmall)" alt="">
                            </div>
                            <div class="text">
                                <h3>{{ card.name }}</h3>
                                <div class="views"><strong>Views:{{ card.views }}</strong></div>
                                <div class="clock">
                                    February 12,2016
                                    <div>2.30.00</div>
                                </div>
                            </div>
                        </div>
                        <!-- //////  -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="hero-second">
        <div class="overlay"></div>
        <div class="container">
            <div class="title">
                <h3>COOMING SOON MOOVIE</h3>
                <h1>MAX STILL </h1>
                <div class="title-bottom">
                    <span>JON PLAYER <span class="color-brand">&</span> EMILY ROSE</span>
                    <div>THE COUNTDOWN IS FINISHED!</div>
                </div>
            </div>
        </div>
    </section>
    <section id="card-list">
        <div class="container">
            <div class="text-new-movie-wrapper">
                <div class="text">
                    <h3>New Movie</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
            <!-- ul ///////////////  -->
            <ul class="ul-movie">
                <li><a href="#" class="active"> All</a></li>
                <li><a href="#"> Coming Soon</a></li>
                <li><a href="#">Latest Movie</a></li>
                <li><a href="#">Top Rating</a></li>
                <li><a href="#"> TV Series</a></li>
            </ul>
            <div class="wrap-card-movie">
                <CardMovie></CardMovie>
            </div>
            <div class="text-new-movie-wrapper">
                <div class="text">
                    <h3>New Movie</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

#card-list {
    color: white;
    background-color: $brand_secondary ;

    .container {
        padding-top: 80px;

        &.p-b-90 {
            padding-bottom: 90px;
        }

        .text-new-movie-wrapper {
            display: flex;
            align-items: center;
            padding-bottom: 70px;

            .text {
                border-left: 3px solid $brand_primary;
                padding: 0 0 12px 12px;
                border-bottom: 1px solid #182028;
                flex-grow: 1;

                h3 {
                    padding-bottom: 12px;
                    font-size: 24px;
                }
            }

            .btn-wrapper {
                display: flex;
                gap: 6px;

                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    border: 1px solid #182028;
                    height: 35px;
                    border-radius: 100%;
                    background-color: inherit;
                    padding: 0 12px;

                    i {
                        color: $brand_primary;
                    }
                }
            }
        }

        .card-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-bottom: 90px;
        }

        .wrapper-youtube {
            display: flex;
            color: white;
            height: 550px;
            overflow: hidden;

            .row-left {
                width: 65%;
                margin-right: 30px;
                background-color: black;
            }

            .row-right {
                width: 35%;
                height: 100%;
                display: flex;
                flex-direction: column;
                background-color: #182028;

                .title {
                    h3 {
                        padding-bottom: 10px;
                        padding-top: 14px;
                    }

                    padding-bottom: 20px;
                    padding-left: 15px;
                    border-bottom: 4px solid $brand_secondary;
                }

                .wrapper-card {
                    display: flex;
                    flex-direction: column;
                    overflow: auto;

                    .card {
                        height: 100px;
                        padding: 20px 15px;
                        display: flex;
                        gap: 15px;
                        margin-bottom: 22px;

                        .image {
                            height: 100px;
                            width: 100px;

                            img {
                                object-fit: cover;
                                height: 100%;
                                width: 100%;
                            }
                        }

                        .text {
                            flex-grow: 1;

                            .views {
                                padding: 10px 0;
                            }

                            .clock {
                                display: flex;
                                justify-content: space-between;
                            }
                        }
                    }
                }
            }
        }
    }
}

#hero-second {
    background-image: url(../assets/img/coming-bg.jpg);
    min-height: 760px;
    background-size: cover;
    color: white;
    background-repeat: no-repeat;
    background-position: 70%;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 80px;

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: $brand_tertiary, $alpha: 0.4);
        z-index: 2;
    }

    .container {
        width: fit-content;
        margin: 0px 33% 0 auto;

        .title {
            position: relative;
            z-index: 11;
            padding: 0 5px;

            h3,
            .color-brand {
                color: $brand_primary;
            }

            h3 {
                font-size: 22px;
                padding-bottom: 7px;
            }

            h1 {
                font-size: 72px;
                font-weight: 300;
                padding-bottom: 7px;
                margin: 0 18px;
            }

            .title-bottom {
                background-color: #0f1828;
                padding: 10px 0;

                span {
                    font-size: 21px;
                    font-weight: 700;
                }

                div {
                    font-size: 18px;
                    margin-top: 20px;
                    font-weight: 500;
                }
            }
        }
    }
}

#card-list {
    .ul-movie {
        display: flex;
        padding-bottom: 65px;
        gap: 30px;
        color: white;

        .active {
            color: $brand_primary;
        }

        a {
            color: white;
        }
    }

    .wrap-card-movie {
        display: flex;
        flex-wrap: wrap;
        margin-left: -12px;
        margin-right: -12px;
        padding-bottom: 90px;

        .card {
            width: calc((100% / 3) - 20px);
            margin: 10px;
        }
    }
}
</style>
