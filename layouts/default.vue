<template>
  <div>
    <Header />
    <div class="main-container text-right">
      <Nuxt class="d-flex justify-content-center mx-auto flex-column w-75"/>
    </div>
    <div id="top-shadow"></div>
    <Footer />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";

export default {
  created(){
      this.getLastRelease()
  },
  methods: {
    ...mapActions({
      getLastRelease: "release/getLastRelease",
    }),
  },
};
</script>

<style lang="scss" scoped>
#top-shadow{
    width: 100vw;
    height: 100%;
    // height: 256px;
    position: absolute;
    top: -80%;
    background: rgb(71,118,230);
    // background: radial-gradient(circle, rgba(71,118,230,1) 0%, rgba(20,6,44,1) 85%);
    background: linear-gradient(to top, transparent 100%, $bg 0%),
              radial-gradient(circle closest-side, $secondary 0% , $bg 100%);
    z-index: -1;
    background-size: 200% 100%;
    animation: gradient 4s ease-in-out infinite;
    animation-direction: alternate;
    // -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */
    // animation-fill-mode: forwards;
}
@keyframes gradient {
    0% {background-position: 0%}
    100% {background-position: 100%}
}
</style>