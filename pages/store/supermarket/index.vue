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
                <!-- Modal button -->
                <nuxt-link to="pointsdecription" >
                <div class="text-light">
                    <i class="fas fa-question-circle"></i> ما هو نظام النقاط 
                </div>
                </nuxt-link>>
                <!-- Modal body -->
                <b-modal id="modal-1" title="نظام النقاط">
                    <p class="my-4">شرح نظام النقاط</p>
                </b-modal>
            </b-col>
        </b-row>
        <StoreSearchResault
            :services="services"
        />
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                fetchServices: 'services/fetchServices',
                clickedService: 'services/clickedService'
            })
        },
        computed: {
            services(){
                console.log(this.$store.state.services.services)
                return this.$store.state.services.services;
            },
            searchText() {
                let search = this.$store.state.services.search.searchText;
                this.$store.dispatch('services/search', search)
                return search;
            },
        },  
        created() {
            this.fetchServices();
        },
    };
</script>

<style lang="scss" scoped>

</style>