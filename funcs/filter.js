function removeEr(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let word = array[i]
        if(!word.endsWith('er')) {
            newArray.push(word)
        }
    }
return newArray 
}

module.exports = removeEr