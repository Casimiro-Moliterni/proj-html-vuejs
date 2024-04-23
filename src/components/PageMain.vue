<script>
import hero from './hero.vue';
import cardList from'./cardList.vue';
import CardListBlog from'./CardListBlog.vue';
export default{
    name:'PageMain',
    components:{
        hero,
       cardList,
       CardListBlog
    }
}
</script>

<template>
 <main>
<hero></hero>
<cardList></cardList>
<CardListBlog></CardListBlog>
 </main>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;


</style>