const initState = 0
export default function(preState = initState, action) {
    const {type, data} = action
    switch(type) {
        case "increment":
            return preState + data
        default:
            return preState
    }
}