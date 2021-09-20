<template>
    <div>
        <StoreSupermarketInfo
        :service="service" />
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
            })
        },
        computed:{
            service(){
                let services = this.$store.state.services.services;
                return services.find(x=>x.id==this.$route.params.id);
            }
        },
        created() {
            this.fetchServices();
        },
    }
</script>

<style lang="scss" scoped>

</style>