export default {
    async subscribe({state, commit, dispatch}, form) {
        await this.$axios
            .post('/subscription/request', form)
            .then((response) => {
                this.$toast.success("تمت الإضافة بنجاح !")
            })
            .catch((error) => {
                this.$toast.error(`${error}`);
            })
    },
}