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
        store
      }
  },
  mounted(){
   
  }
}
</script>

<template>
  <PageHeader></PageHeader>
  <PageMain></PageMain>
  <PageFooter></PageFooter>
</template>

<style lang="scss">
@import './style/generic';
</style>