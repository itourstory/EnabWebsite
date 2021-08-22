<template>
  <div class="container">
    <SupportSearchInput />
    <SupportSearchResult v-if="searchText" :search_text="searchText" />
    <div v-else>
      <SupportCategories :categories= "categories"/>
      <SupportContact />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
  export default {
    computed: {
      searchText() {
        return this.$store.state.support.search.searchText;
      },
      categories(){
                return this.$store.state.categories 
      },
    },
    methods: {
        ...mapActions({
            fetchcategories: 'categories/fetchCategories',
        }),
    },
    created(){
        this.fetchcategories()
    },
  };
</script>

<style lang="scss" scoped>
</style>