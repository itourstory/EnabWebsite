export default {
    async subscribe({commit, dispatch}) {
        await this.$axios
            .post('/subscription/request')
            .catch(error => {
                throw new Error(`${error}`);
            })
    },
}