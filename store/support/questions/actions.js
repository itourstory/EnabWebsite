export default {
    async syncLocalStorage({state}, dispatch){
        this.$auth.$storage.setLocalStorage('questions', state.questions)
    },

    async fetchQuestions({commit, dispatch}) {
        var questions = await this.$auth.$storage.getLocalStorage('questions')
        if (questions === null) // If not set on the storage
            await this.$axios
                .get('/support/question')
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
}