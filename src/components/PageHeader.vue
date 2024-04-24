<script>
export default {
  name: 'PageHeader',
  props: {
    social: Array,
    NavLink: Array
  },
  data() {
    return {
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
  }
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
            <li v-for="singleIcon in social" v-show="singleIcon.id !== '06'">
              <a href="#">
                <i :class="[`fa-brands ${singleIcon.name} ${singleIcon.color}`]"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="login">
          <i class="fa-solid fa-lock"></i>
          Login
        </div>
      </div>
    </div>
    <!-- header-center-input  -->
    <div class="header-center">
      <div class="container">
        <div class="image">
          <img :src="getImageUrl('cropped-logo.png')" alt="">
        </div>
        <div class="search-bar">
          <input type="text" placeholder="search...">
          <div>Search</div>
        </div>
      </div>
    </div>
    <!-- header-bottom  -->
    <div class="header-bottom">
      <div class="container">
        <nav>
          <ul id="ul-list">
            <li v-for="singlElement in NavLink">
              <a href="#">
                {{ singlElement.name }}
              </a>
              <i :class="[` ${singlElement.icon}`]"></i>
            </li>
            <template v-if="singlElement !== 'Home'">
              <ul id="list-hover">
                <li v-for="n in 6"  >
                  <div >
                    <a href="#">
                    home {{ n }}
                    </a>
                  </div>
                </li>
              </ul>
            </template>
          </ul>
          <div class="basket-buy">
            <div>0</div>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

header {
  background-color: $brand_secondary;
  color: white;
}

.header-top {
  color: white;
  padding: 18px 0;
  border-bottom: 1px solid #182028;

  .container {
    display: flex;
    align-items: center;
    padding-right: 15px;

    //  email-text + icon social
    .email-text,
    ul,
    .login {
      display: flex;
      font-size: 15px;
      font-weight: 500;

      .fa-envelope {
        margin-right: 4px;
      }

      ul {
        margin-left: 10px;
        gap: 15px;
      }

      #name {
        color: $brand_primary;
        margin-right: 20px;
      }
    }

    //  login 
    .login {
      margin-left: auto;
      gap: 7px;
    }

    .color-fb {
      color: #3b5998;
    }

    .color-tw {
      color: #00acee;
    }

    .color-in {
      color: #0e76a8;
    }

    .color-ig {
      color: #a01e28;
    }

    .color-gp {
      color: #db4a39;
    }
  }
}

.header-center {
  padding: 12px 0 32px 0;
  border-bottom: 1px solid #182028;

  .container {
    display: flex;
    justify-content: space-between;

    .image {
      height: 65px;

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .search-bar {
      width: 23%;
      height: 50px;
      display: flex;
      justify-content: flex-end;

      input {
        width: 100%;
        padding-left: 10px;
        height: 100%;
        border: none;
        background-color: inherit;
        border-top: 1px solid #182028;
        border-bottom: 1px solid #182028;

      }

      div {
        cursor: pointer;
        display: flex;
        background-color: $brand_primary;
        height: 100%;
        align-items: center;
        padding: 0 20px;
      }
    }
  }
}

.header-bottom {
  padding: 14px 0px 26px 0;

  .container {
    display: flex;
    align-items: center;

    nav {
      display: flex;
      align-items: center;
      width: 100%;

      #ul-list {
        display: flex;
        flex-grow: 1;
        gap: 25px;
        i {
          cursor: pointer;
        }

        a {
          color: white;
          font-size: 18px;
          margin-right: 4px;
          font-weight: 700;
        }
      }

      #ul-list>li:hover a,
      #ul-list>li:hover {
        color: $brand_primary;
      }
      #ul-list{
      position: relative;
    }
    #ul-list:nth-child(1):hover  #list-hover{
      display: block;
    }
    #list-hover{
      width: 190px;
       z-index: 111;
      position: absolute;
      top: 20px;
      left: -15px;
      padding: 15px;
      background-color: $brand_secondary;
      border-radius: 10px;
      display: none;
      li{
        padding-bottom: 15px;
      }
    }
    #list-hover>li:hover a{
      color: $brand_primary;
    }
      .basket-buy {
        display: flex;
        flex-direction: column;
        justify-content: end;

        div {
          margin-left: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          background-color: $brand_primary;
          padding: 6px;
          height: 20px;
          border-radius: 100%;
        }
      }

    }
  }
}
</style>