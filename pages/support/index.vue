<template>
  <div class="container">
    <SupportSearchInput />
    <SupportSearchResult v-if="searchText !== ''" :searchText="searchText" :questions="questions"  />
    <div v-else>
      <SupportCategories @clicked="getId($event)" :categories="categories"/>
      <SupportSearchResult :questions="questions" :resault="resault" />
      <SupportContact />
    </div>
    <!-- <button @click="dd()">dd</button> -->
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
        resault: 0
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
        getId(category_id){
          this.resault = category_id
        },
        dd(){
          console.log(this.questions)
        }
    },
    computed: {
      resultQuery(){
        if(this.searchQuery){
        return this.resources.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
        })
        }else{
          return this.resources;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>