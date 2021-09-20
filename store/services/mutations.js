export default {
    set(state, services){
        state.services = services
        state.searchResault = services
    },
    set_clicked(state,service){
        state.clickedService=service
    },
    set_resault(state, services){
        state.searchResault = services
    }
}