<template>
    <div>
        <b-row class="my-1">
            <b-col sm="6">
                <h2 class="text-light">متجر الخدمات</h2>
            </b-col>
            <b-col sm="6">
                <StoreSearchInput />
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col sm="6">
                <b-badge pill variant="primary" class="m-3">عدد الخدمات {{services.length}}</b-badge>
            </b-col>
            <b-col sm="6">
                <div class="text-light">
                    <nuxt-link to="pointsdecription" >
                        <i class="fas fa-question-circle"></i> ما هو نظام النقاط 
                    </nuxt-link>
                </div>
            </b-col>
        </b-row>
        <StoreSearchResault
            :services="services"
            :searchText="searchText"
        />
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";

    export default {
        methods: {
            ...mapActions({
                fetchServices: 'services/fetchServices',
                search: "services/search"
            })
        },
        computed: {
            searchText() {
                let search = this.$store.state.services.search.searchText;
                this.$store.dispatch('services/search', search)
                return search;
            },
            services(){
                return this.$store.state.services.searchResault;
            }
        },  
        created() {
            this.fetchServices();
        },
    };
</script>

<style lang="scss" scoped>

</style>