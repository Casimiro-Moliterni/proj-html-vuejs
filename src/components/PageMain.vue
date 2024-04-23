<script>
import hero from './hero.vue';
import cardList from'./cardList.vue';
export default{
    name:'PageMain',
    components:{
        hero,
       cardList
    }
}
</script>

<template>
 <main>
<hero></hero>
<cardList></cardList>
 </main>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;


</style>