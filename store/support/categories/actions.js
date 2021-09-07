export default {
    async syncLocalStorage({state}, dispatch){
        this.$auth.$storage.setLocalStorage('categories', state.categories)
    },

    async fetchCategories({commit, dispatch}) {
        var categories = await this.$auth.$storage.getLocalStorage('categories')
        if (categories === null) // If not set on the storage
            await this.$axios
                .get('/support/tags')
                .then(async (response) => {
                    // Send to Mutations
                    commit('set_categories', response.data);
                    //Save To Storage
                    this.$auth.$storage.setLocalStorage('categories', response.data)
                }).catch(error => {
                    throw new Error(`${error}`);
                })
        else
            commit('set_categories', categories); // Send to Mutations
    },
}