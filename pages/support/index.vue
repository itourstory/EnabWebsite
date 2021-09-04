<template>
  <div class="container">
    <SupportSearchInput />
    <SupportSearchResult
      v-if="searchText !== ''"
      :searchText="searchText"
      :questions="questions"
    />
    <div v-else>
      <SupportCategories :categories="categories" />
      <SupportContact />
    </div>
    <!-- <button @click="dd()">dd</button> -->
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";
export default {
  computed: {
    searchText() {
      let search = this.$store.state.support.search.searchText;
      this.$store.dispatch('support/questions/search', search)
      return search;
    },
    categories() {
      return this.$store.state.support.categories.categories;
    },
    questions() {
      return this.$store.state.support.questions.questions;
    },
  },
  data() {
    return {
      resault: 0,
    };
  },
  created() {
    this.fetchCategories();
    this.fetchQuestions();
  },
  methods: {
    ...mapActions({
      fetchCategories: "support/categories/fetchCategories",
      fetchQuestions: "support/questions/fetchQuestions",
      search: "support/questions/search"
    }),
    getId(category_id) {
      this.resault = category_id;
    },
    dd() {
      console.log(this.questions);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>