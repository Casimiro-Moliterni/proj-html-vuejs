<script>
export default {
    name: 'PageFooter'
}
</script>

<template>
    <footer>
        <section id="footer-top">
            <div class="container">

            </div>
        </section>
        <section id="footer-bottom">
            <div class="container">
                <ul>
                    <li><a href="#">Tram And Conditions</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div class="conditions">
                    <span>©2020</span>
                    <span>@Themepul</span>
                    <span>All Rights Reserved.</span>
                </div>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables' as *;

#footer-top {
    color: white;
}

#footer-bottom {
    color: white;
    background-color: $brand_secondary;
    padding: 25px 0;
    .container {
        display: flex;
        align-items: center;
        ul {
            flex-grow: 1;
            display: flex;
            gap: 26px;
            a{color: white;}
        }
        .conditions{
            display: flex;
            align-items: center;
            gap: 5px;
          :nth-child(2){
              color: $brand_primary;
          }
        }
    }
}
</style>