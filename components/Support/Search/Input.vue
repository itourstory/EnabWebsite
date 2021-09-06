<template>
  <div>
    <div>
      <h2 class="mb-4 text-center text-white">كيف يمكننا مساعدتك ؟</h2>
        <div class="form-group bg-custom rounded-pill mb-0 p-3 shadow">
          <div class="row">
            <div class="col">
              <div class="input-group input-group-merge shadow-none">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent border-0"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-flush shadow-none"
                  placeholder="اوصف المشكلة"
                  v-model="searchText"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return {
      searchText: ''
    }
  },
  methods: {
    ...mapMutations({
      storeSearch: 'support/search/setSearchText'
    }),
  },
  watch: {
    searchText(){
      this.storeSearch(this.searchText)
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-custom {
  background: $secondary;
  .form-control {
    background: #ffffff00;
    color: #fff;
  }
}
</style>