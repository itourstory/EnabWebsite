<template>
    <div>
        <b-form-input 
            type="search" 
            class="r-3" 
            placeholder="اكتب اسم الخدمة"
            v-model="searchText"
        >
        </b-form-input>
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
                storeSearch: 'services/search/setSearchText'
            }),
        },
        watch: {
            searchText(){
                this.storeSearch(this.searchText)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>