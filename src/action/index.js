export const selectLibrary = (id) => {
    console.log("Aku kepilihh iyaaa " + id)
    return {
        type: 'select_library',
        payload: id
    }
}

export const dataList = (list) => {
    return {
        type: 'data_list',
        payload: list
    }
}