<script>
export default {
  name: 'PageHeader'
}
</script>

<template>
  <header>
    <!-- header top  -->
    <div class="header-top">
      <div class="container">
        <div class="email-text">
          <i class="fa-regular fa-envelope"></i>
          <span>Superhit Top Movie</span>
          <span id="name">**King Star**</span>

          <ul>
            <li><a href="#" class="color-fb"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#" class="color-tw"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#" class="color-in"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#" class="color-ig"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#" class="color-gp"><i class="fa-brands fa-google-plus-g"></i></a></li>
          </ul>
        </div>
        <div class="login">
          <i class="fa-solid fa-lock"></i>
          login
        </div>
      </div>
    </div>
    <!-- header-center-input  -->
    <div class="header-center">
      <div class="container">

      </div>
    </div>
    <!-- header-bottom  -->
    <div class="header-bottom">
      <div class="container">

      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

.header-top {
  background-color: $brand_secondary;
  color: white;
  padding: 18px 0;
  border-bottom: 1px soldid #182028;
     .container{
     display: flex;
     align-items: center;
    //  email-text + icon social
      .email-text,ul,.login{
      display: flex;
      align-items: center;
      font-size:14px ;
      .fa-envelope{
        margin-right: 4px;
      }
      ul{
        gap: 10px;
      }
      #name {
        color: $brand_primary;
        margin-right: 20px;
      }
     }

    //  login 
    .login{
      margin-left: auto;
      gap: 7px;
    }
   }
    

     .color-fb{
      color: #3b5998;
     }
     .color-tw{
      color: #00acee;
     }
     .color-in{
      color: #0e76a8;
     }
     .color-ig{
      color: #a01e28;
     }
     .color-gp{
      color: #db4a39;
     }
}
</style>