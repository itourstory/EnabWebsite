export default{
    services: state => {
        return state.services
    },
    getService: state => {
        let id = state.clickedService
        return state.services.find(x => x.id == id)
    }
}