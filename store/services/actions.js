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
        let service = state.services.services.find(x=>x.id==id);
        commit('set_clicked', service); // Send to Mutations
    }
}