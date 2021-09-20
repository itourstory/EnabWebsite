export default{
    services: state => {
        return state.services
    },
    getService: state => id => {
        return state.services.find(x => x.id == id)
    }
}