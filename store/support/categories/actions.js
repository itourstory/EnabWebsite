export default {
    async syncLocalStorage({state}, dispatch){
        this.$auth.$storage.setLocalStorage('categories', state.categories)
    },

    async fetchcategories({commit, dispatch}) {
        var categories = await this.$auth.$storage.getLocalStorage('categories')
        if (categories === null) // If not set on the storage
            await this.$axios   
                .get('http://127.0.0.1:8000/api/support/tag')
                .then(async (response) => {
                    // Send to Mutations
                    commit('set_all', response.data);
                    //Save To Storage
                    this.$auth.$storage.setLocalStorage('categories', response.data)
                }).catch(error => {
                    throw new Error(`${error}`);
                })
        else
            commit('set_all', categories); // Send to Mutations
        
    },
}