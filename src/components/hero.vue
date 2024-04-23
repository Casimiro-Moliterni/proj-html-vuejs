<script>
export default{
    name:'hero'
}
</script>

<template>
<section class="hero">
    <div class="container">
        <h4>Welcome To Our Movie Site </h4>
        <span class="text-title">OUR SPECIAL <span class="color-p">MOVIE</span></span>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fuga quisquam nam mollitia consectetur at! Eaque voluptate ipsam, adipisci harum explicabo tenetur.
        </p>
        <button>Read More</button>
   </div>
</section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

.hero{
    display: flex;
    align-items: center;
    background-image:url(../assets/img/slider-1536x520.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 700px;
    text-align: center;
  .container{
    width: 20%;
    .text-title{
    padding-top: 15px;
    padding-bottom: 20px;
    font-size: 45px;
    font-weight: 500;
    .color-p{
        color: $brand_primary;
    }
   }
   p{
        line-height: 1.5;
    }
  }
}
</style>