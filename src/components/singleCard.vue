<script>
export default{
    name:'singleCard'
}
</script>

<template>
    <div class="single-card">
        <!-- img  -->
       <div class="image">
         <img src="../assets/img/2-1.jpg" alt="">
       </div>
       <!-- testo  -->
       <div class="wrap-star">
            <i class="fa-solid fa-star"></i>
            <div>0/0</div>
        </div>
       <!-- text wrap  -->
       <div class="text-wrap">
          <h3>ciao</h3>
          <div>category</div>
       </div>
       <div class="details left">details</div>
       <div class="details right">view</div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;
  
  .single-card{
    width: calc(100% / 3);
    border-radius: 20px;
    position: relative;
    .image{
       opacity: 0.5;
        img{
            border-radius: 20px;
           
        }
    }
    .wrap-star{
          display: flex;
          align-items: center;
          padding:30px 10px ;
          position: absolute;
          top: 0;
          right: 0;
           i{
            color:$brand_primary;
            }
    }
    .text-wrap{
          padding: 0 10px;
           position: absolute;
           bottom: 20%;
           left: 0;
        }
     .details{
        position: absolute;
        bottom: 17px;
        padding: 8px 20px;
        background-color:$brand_secondary;
        &.left{
            left: 0;
            border-top-right-radius:20px ;
            border-bottom-right-radius:20px ;
        }
        &.right{
            right: 0;
            border-top-left-radius:20px ;
            border-bottom-left-radius:20px ;
        }
     }

  }
</style>