export default {
    async fetchServices({commit, dispatch}) {
        await this.$axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(async (response) => {
                // Send to Mutations
                commit('set', response.data);
            }).catch(error => {
                throw new Error(`${error}`);
            })
    },

    async search({commit}, text){
        var questions = await this.$auth.$storage.getLocalStorage('questions')

        if (text)
            questions = questions.filter(item => {
                return item.title.includes(text)
            })
        
        commit('set_questions', questions); // Send to Mutations
    }
}