export default {
    namespaced: true,
    state: {
        configName: '',
        defaultArray: {},
    },
    mutations: {
        ADDARRAY(state, data) {
            state.defaultArray[data.num] = data.val
        },
        UPDATEARR(state, data) {
            console.log(data)
            state.defaultArray[data.num] = data.val
            let value = Object.assign({}, state.defaultArray);
            state.defaultArray = value;
        },
        defaultArraySort(state, data) {
            let newArr = objToArr(state.defaultArray)
            let sortArr = []
            let newObj = {}
            function objToArr(data) {
                let obj = Object.keys(data);
                let m = obj.map(key => data[key]);
                return m
            }
            function swapArray(arr, index1, index2) {
                arr[index1] = arr.splice(index2, 1, arr[index1])[0];
                return arr;
            }
            if (data.oldIndex != undefined) {
                sortArr = JSON.parse(JSON.stringify(swapArray(newArr, data.newIndex, data.oldIndex)))
            } else {
                newArr.splice(data.newIndex, 0, data.element.data().defaultConfig);
                sortArr = JSON.parse(JSON.stringify(newArr))
            }
            for (let i = 0; i < sortArr.length; i++) {
                newObj[sortArr[i].timestamp] = sortArr[i];
            }
            state.defaultArray = newObj;
        },
        SETCONFIGNAME(state, name) {
            state.configName = name;
        },
    },
    actions: {

    }
}