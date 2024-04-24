<script>
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components:{
    PageHeader,
    PageMain,
    PageFooter
    },
    data(){
      return{
        store,
        links:[
          {
            name:'About Us',
            text:['Mauris malesuada arcu eu porsuere eleifen. Ut egestas tortor at leo egestas tincidunbt.Nam tincidunt metus tristique tristique viverra.Mauris erat ante,egestas vitae dapibus seds']
          },
          {
            name:'Movie Category',
            text:[
            'English New Movie',
            'Hindi All Movie',
            'Latest Tamil Movie',
            'New Top Rating Movie',
            'Hornn New Movie',
            'Animation New Movie',
            ]
          },
          {
            name:'Information',
            text:[
              'Youtube Video Post',
              'Actor Information',
              'New Promotion',
              'Latest Movie In English',
              'Latest Film Product',
              'Video New Video'
            ]
          },
          {
            name:'Recent Post'
          }
      
        ],
        socialIcon: [
        {
          id: '01',
          name: 'fa-facebook-f',
          color: 'color-fb',
          bgColor:'color-fb'
        },
        {
          id: '02',
          name: 'fa-twitter',
          color: 'color-tw',
          bgColor:'color-fb'
        },
        {
          id: '03',
          name: 'fa-linkedin-in',
          color: 'color-in',
          bgColor:'color-in'
        },
        {
          id: '04',
          name: 'fa-instagram',
          color: 'color-ig',
          bgColor:'color-ig'
        },
        {
          id: '05',
          name: 'fa-google-plus-g',
          color: 'color-gp'
        },
        {
          id:'06',
          name:' fa-pinterest',
          bgColor:'color-pint'
        }
      ],
      navList:[
        {
          name:'Home',
          id:'01',
          icon:'fa-solid fa-caret-down'
        },
        {
          name:'Celebrity',
          id:'02',
          icon:'fa-solid fa-caret-down'
        },
        {
          name:'Movie',
          id:'03',
          icon:'fa-solid fa-caret-down'
        },
        {
          name:'Page',
          id:'04',
          icon:'fa-solid fa-caret-down'
        },
        {
          name:'shop',
          id:'05',
          icon:'fa-solid fa-caret-down'
        },
        {
          name:'blog',
          id:'06',
        },
        {
          name:'Contact Us',
          id:'07'
        },
      ]
      }
  },
  mounted(){
   
  }
}
</script>

<template>
  <PageHeader :social="this.socialIcon" :NavLink="this.navList"></PageHeader>
  <PageMain></PageMain>
  <PageFooter :info="this.links" :social="this.socialIcon"></PageFooter>
</template>

<style lang="scss">
@import './style/generic';
</style>