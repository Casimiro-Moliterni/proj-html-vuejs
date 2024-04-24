<script>
export default {
    name: 'hero'
}
</script>

<template>
    <section class="hero">
        <div class="container">
            <div>Welcome To Our Movie Site </div>
            <span class="text-title">OUR SPECIAL <span class="color-p">MOVIE</span></span>
            <div class="wrap-p">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fuga quisquam nam mollitia
                    consectetur at! Eaque voluptate ipsam, adipisci harum explicabo tenetur.
                </p>
            </div>
            <button class="btn">Read More</button>
        </div>
        <button class="chevron-btn"><i class="fa-solid fa-chevron-up"></i></button>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

.hero {
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    background-image: url(../assets/img/slider-1536x520.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 700px;
    text-align: center;

    .chevron-btn {
        padding: 15px 15px;
        position: absolute;
        bottom: 70px;
        right: 60px;

        i {
            color: black;
        }
    }

    .container {
        width: 25%;
        margin: 0px 33% 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        .text-title {
            padding-top: 15px;
            padding-bottom: 20px;
            font-size: 45px;
            font-weight: 400;

            .color-p {
                color: $brand_primary;
            }
        }

      .wrap-p{
        width: 80%;
        p {
            line-height: 1.5;
        }
      }

        .btn {
            color: white;
            margin-top: 20px;
            border-radius: 20px;
            padding: 12px 20px;
            font-size: 14px;
            font-family: inherit;
            border: none;
            background-color: $brand_primary;
            font-weight: 500;
            transition: 0.5s;
            &:hover{
                            background-color: white;
                            color: black;
                        }
        }
    }
}
</style>