<script>
export default{
    name:'hero'
}
</script>

<template>
<section class="hero">
    <div class="container">
        <h4>Welcome To Our Movie Site </h4>
        <h1>OUR SPECIAL</h1>
    </div>
</section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

.hero{
    background-image:url(../assets/img/slider-1536x520.jpg);
    background-repeat: no-repeat;
   background-size: cover;
    height: 500px;
}
</style>