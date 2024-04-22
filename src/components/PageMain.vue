<script>
import hero from './hero.vue';
export default{
    name:'PageMain',
    components:{
        hero
    }
}
</script>

<template>
 <main>
<hero></hero>
 </main>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;


</style>