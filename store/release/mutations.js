export default {
    add(state, releases){
        state.releases = releases
    },

    lastRelease(state, link){
        state.lastRelease = link
    }
}