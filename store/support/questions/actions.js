export default {
    async syncLocalStorage({state}, dispatch){
        this.$auth.$storage.setLocalStorage('questions', state.questions)
    },

    async fetchQuestions({commit, dispatch}) {
        var questions = await this.$auth.$storage.getLocalStorage('questions')
        if (questions === null) // If not set on the storage
            await this.$axios
                .get('/support/questions')
                .then(async (response) => {
                    // Send to Mutations
                    commit('set_questions', response.data);
                    //Save To Storage
                    this.$auth.$storage.setLocalStorage('questions', response.data)
                }).catch(error => {
                    throw new Error(`${error}`);
                })
        else
            commit('set_questions', questions); // Send to Mutations
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