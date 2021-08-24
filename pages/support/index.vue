<template>
  <div class="container">
    <SupportSearchInput />
    <SupportSearchResult v-if="searchText" :search_text="searchText" />
    <div v-else>
      <SupportCategories :categories="categories"/>
      <SupportSearchResult :questions="questions" />
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
      },
      questions(){
        return this.$store.state.support.questions.questions
      }
    },
    data() {
      return {
        clicked: false,
      }
    },
    created(){
      this.fetchCategories()
      this.fetchQuestions()
    },
    methods: {
        ...mapActions({
            fetchCategories: 'support/categories/fetchCategories',
            fetchQuestions: 'support/questions/fetchQuestions',
        }),
    },
  };
</script>

<style lang="scss" scoped>
</style>