export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            console.log(action.payload)
            return action.payload
        case 'data_list':
            return action.payload
        default:
            console.log("lho kok masuk sini")
            return state
    }
}