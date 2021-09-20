export default {
    async fetchServices({commit, dispatch}) {
        await this.$axios
            .get('/services')
            .then(async (response) => {
                // Send to Mutations
                commit('set', response.data);
            }).catch(error => {
                throw new Error(`${error}`);
            })
    },

    async clickedService({commit , state}, id){
        let service = state.services.find(x=>x.id==id);
        commit('set_clicked', service); // Send to Mutations
    },

    async search({commit , state}, text){
        console.log(text)
        let services = state.services;
        if(text)
            services = services.filter(item => {
                    return item.title.includes(text)
            })
        commit('set_resault', services); // Send to Mutations
    }
}