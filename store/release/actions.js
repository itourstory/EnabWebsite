
String.prototype.endsWith = function (str) {
    return (
        this.length >= str.length && this.substr(this.length - str.length) === str
    );
};

export default {
    async fetchReleases({ commit }) {
        let releases = await this.$axios.$get(
            "https://api.github.com/repos/itourstory/EnabApp/releases"
        );
        commit('add', releases)
    },

    async getLastRelease({ commit, state, dispatch }) {
        if (state.releases.length <= 0)
            await dispatch('fetchReleases')
        
        let link = await state.releases[0].assets.find((x) => x.browser_download_url.endsWith('.exe')).browser_download_url
        commit('lastRelease', link)
    }

}