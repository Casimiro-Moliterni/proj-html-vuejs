<script>
import {store} from '../store.js';
export default {
    name: 'PageFooter',
    props:{
        info:Array,
        social:Array
    },
    data(){
        return{
            store
        }
    },
    methods:{
          getImageUrl(name) {
         return new URL(`../assets/img/${name}`, import.meta.url).href;
       },
    }
}
</script>

<template>
    <footer>
        <section id="footer-top">
            <div class="overlay"></div>
            <div class="container">
                 <div class="row">
                    <div class="col"v-for="link in info" >
                        <ul>
                         <li ><a href="#" class="link-name"><h3>{{ link.name }}</h3></a></li>
                         <li v-for="a in link.text"><a href="#">{{ a }}</a></li>
                         <template v-if="link.name == 'About Us'">
                            <ul  id="social">
                                <li v-for="singleSocial in social" v-show="singleSocial.id !== '05'" >
                                    <div :class="[`${singleSocial.bgColor}`]">
                                        <a href="#" >
                                             <i  :class="[`fa-brands ${singleSocial.name}`]"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                         </template>
                         <template v-if="link.name == 'Recent Post'">
                            <div class="card" v-for="singleCard in store.BlogList" v-show="singleCard.id !== '04'&&singleCard.id !== '05' ">
                              <div class="wrapper-card">
                                <div class="image">
                                    <img :src="getImageUrl(singleCard.imageSmall)" alt="">
                                    <div>
                                        <div class="title">{{ singleCard.name }}</div>
                                        <div>April 14, 2020</div>
                                    </div>
                                </div>
                              </div>
                            </div>
                         </template>
                        </ul>
                    </div>
                 </div>
            </div>
        </section>
        <section id="footer-bottom">
            <div class="container">
                <ul>
                    <li><a href="#">Tram And Conditions</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div class="conditions">
                    <span>©2020</span>
                    <span>@Themepul</span>
                    <span>All Rights Reserved.</span>
                </div>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

#footer-top {
    padding: 60px 0;
    color: white;
    background-image: url(../assets/img/ft-bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    min-height: 500px;
    position: relative;
     .overlay{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        background-color: rgba($color: $brand_tertiary, $alpha: 0.9);
     } 
     .row{
        position: relative;
        z-index: 111;
        color: white;
        display: flex;
        margin-left: -15px;
        margin-right: -15px;
        .col{
            width: calc(100% / 4);
            padding: 0 15px;
            a{color: white;}
            ul{
                display: flex;
                flex-direction: column;
                .card{
                    margin-bottom: 30px;
                      .wrapper-card{
                        display: flex;
                        align-items: center;
                        .image{
                       display: flex;
                       align-items: center;
                       .title{   
                                margin-bottom: 10px;
                            }
                        img{
                            height: 80px;
                            width: 80px;
                            object-fit: cover;
                            margin-right: 15px;
                        }
                      }
                    }
                }
                #social{
                    width: 85%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 8px;
                    margin-top: -10px;
                    li{
                        div{
                            max-height:35px;
                            width: 35px;
                            display:flex ;
                            align-items: center;
                            justify-content: center;
                            border-radius: 100%;
                            padding: 10px;
                        }
                    }
                }
                .link-name::after{
                   content: '';
                   width: 32px;
                   height: 2px;
                   background-color: white;
                   position: absolute;
                   bottom: -5px;
                   left: 0;
                }
                li{
                    margin-bottom: 35px;
                    text-align: left;
                }
                .link-name{
                    position: relative;
                   margin-bottom: 35px;
                }
            }
        }
     }
}

#footer-bottom {
    color: white;
    background-color: $brand_secondary;
    padding: 25px 0;
    .container {
        display: flex;
        align-items: center;
        ul {
            flex-grow: 1;
            display: flex;
            gap: 26px;
            a{color: white;}
        
        }
        .conditions{
            display: flex;
            align-items: center;
            gap: 5px;
          :nth-child(2){
              color: $brand_primary;
          }
        }
    }
}
 .color-fb{
    background-color: #02b0e8;
 }
 .color-in{
    background-color:#00a098 ;
 }
 .color-ig{
    background-color: #c22e2a;
 }
 .color-pint{
    background-color: #b00a1b;
 }
</style>