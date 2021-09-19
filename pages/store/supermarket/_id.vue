<template>
    <div>
        <StoreSupermarketInfo
        :service="service" />
        {{service}}
        {{this.$route.params.id}}
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
                clickedService: 'services/clickedService',
            })
        },
        computed:{
            service(){
                this.$store.dispatch('services/clickedService',this.$route.params.id)
                return this.$store.state.services.clickedService
            }
        },
        created() {
            this.fetchServices();
            var _id = this.$route.params.id;
            var regex = /^([0-9]{2,2})([0-9]{2,2})([0-9]{8,8})$/;
            var contents = _id.match(regex);

            this.type = contents[1];
            this.subtype = contents[2];
            this.id = contents[3];
                },
    }
</script>

<style lang="scss" scoped>

</style>