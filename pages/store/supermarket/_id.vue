<template>
    <div>
        <h1 class="text-light">hii {{this.$route.params.id}}</h1>
        <h1 class="text-light">hii {{services}}</h1>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex'

    export default {
        validate({params}){
            return !isNaN(params.id);
        },
        methods: {
            ...mapActions({
                fetchServices: 'services/fetchServices',
                clickedService: 'services/clickedService'
            })
        },
        computed:{
            services(){
                return this.$store.state.services.services.find(service => service.id === this.$route.params.id);
            }
        },
        created() {
            this.fetchServices();
        },
    }
</script>

<style lang="scss" scoped>

</style>