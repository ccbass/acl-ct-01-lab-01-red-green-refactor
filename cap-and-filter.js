const capAndFilter = (arr) => {
    let filteredArr = [];

    for (let x = 0; x < arr.length; x++){
        let ele = arr[x];
        if (ele.startsWith('F') || ele.startsWith('f')){
            continue
        }
        let [first, ...rest] = ele
        filteredArr.push(`${first.toUpperCase()}${rest.join('')}`)
    }
    return filteredArr
}

module.exports = capAndFilter