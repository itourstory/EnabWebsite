<template>
  <div class="container">
    <SupportSearchInput />
    <SupportSearchResult v-if="searchText" :search_text="searchText" />
    <div v-else>
      <SupportCategories :categories="categories"/>
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
        return this.$store.state.support.categories.categories
      }
    },
    data() {
      return {
        clicked: false,
      }
    },
    created(){
      this.fetchCategories()
    },
    methods: {
        ...mapActions({
            fetchCategories: 'support/categories/fetchCategories',
        }),
    },
  };
</script>

<style lang="scss" scoped>
</style>