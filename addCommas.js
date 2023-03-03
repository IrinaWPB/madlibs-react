function addCommas(n) {
    let array = String(n).split('')
    let negative = false
    let float = ''

    if (array[0]=== '-') {
        array.shift();
        negative = true
    }

    if (array.indexOf('.') !== -1) {
        float = array.splice(array.indexOf('.'))
    }

    let startingPont = (array.length)%3 
    if (startingPont === 0) {
        startingPont = 3
    }
    if (array.length >= 4) {
        for (let i = startingPont; i <= array.length-3; i=i+4) {
            array.splice(i, 0, ',')
        }    
    }
    if (negative) {
        array.unshift('-')
    }
    const finalNumber = array.concat(float).join('')
    return finalNumber
}


module.exports = addCommas;