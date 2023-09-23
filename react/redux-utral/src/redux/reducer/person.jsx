const initSate = [{'id': 1, "name": "lwt", "age": 18}]
export default function reducer(preState=initSate, action) {
    const {type, data} = action
    switch(type) {
        case "add":
            return [data, ...preState]
        default:
            return preState
    }
}