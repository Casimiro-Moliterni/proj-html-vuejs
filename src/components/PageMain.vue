<script>
import hero from './hero.vue';
import cardList from './cardList.vue';
import CardListBlog from './CardListBlog.vue';
export default {
    name: 'PageMain',
    components: {
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
        <section id="registration">
            <div class="container">
               <div class="wrapper-input">
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
                <input type="text" placeholder="Email Address">
               </div>
               <button>Subscribe</button>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

#registration {
    color: white;
    background-color: $brand_secondary;
    padding-top: 110px;
    padding-bottom: 85px;
    .container{
        background-image: url(../assets/img/form-bg-1.png);
        min-height: 350px;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .wrapper-input{
            display: flex;
            justify-content: center;
            gap: 25px;
            width: 85%;
            input{
                background-color: $brand_primary;
                border: none;
                border: 1px solid white;
                color: white;
                padding: 18px 16px;
                border-radius: 25px;
                width: 33%;
            }
            ::placeholder { 
                   color: white;
                    }
                  
           }
           button{      color: white;
                        background-color: #060e18;
                        padding: 20px 40px;
                        border-radius: 30px;
                        border: none;
                        margin-top: 40px;
                    }
    }
}
</style>