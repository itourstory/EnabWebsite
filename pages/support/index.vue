<template>
  <div class="container">
    <SupportSearchInput />
    <SupportSearchResult v-if="searchText" :search_text="searchText" />
    <div v-else>
      <SupportCategories />
      <SupportContact />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searchText() {
      return this.$store.state.support.search.searchText;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>