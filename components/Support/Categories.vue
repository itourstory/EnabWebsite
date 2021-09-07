<template>
  <div class="mt-7">
    <div class="row mx-lg-n4">
      <!-- Get Started -->
        <div v-for="category in categories" :key="category.id"  class="col-lg-4 col-md-6 px-lg-4">
          <nuxt-link :to="pagesLinks[category.id-1]">
            <div class="bg-primary m-3 rounded-pill p-3 d-flex hover-scale-110">
              <div class="icon icon-shape rounded-circle bg-dark text-white ml-4">
                <i :class="icons[category.id-1]"></i>
              </div>
              <div>
                <span class="h5 text-light">{{category.name}}</span>
                <p class="text-sm text-muted mb-0">{{category.description}}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'categories',
  ],
  computed:{
    icons(){
      return ['fas fa-life-ring' , 'fas fa-user' , 'fas fa-shield-alt','fas fa-cubes','fas fa-money-bill-alt','fas fa-exclamation-triangle']
    },
    pagesLinks(){
      return ['/support','/support','/support','/services/supermarket','/support','/support'] //page number 4 for category number 4 => Services page (/docs)
    }
  },
  methods:{
    send_id(tag_id){
      this.$emit('clicked',tag_id)
      console.log(tag_id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>