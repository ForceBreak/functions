function mostFrequentCharacter(text) {
    let result = {
        character: '',
        count: 0
    }
    let characters = [] //Array for unique characters
    let textArray = text.replace(/ +/g, '').trim().split('')

    textArray.forEach(elem => {
        let found = characters.findIndex(item => item.character == elem)
        if(found != -1){
            characters[found].count++
        }else{
            characters.push({character: elem, count: 1})
        }
    })

    // Find most counted character
    characters.forEach(e => {
        if(e.count > result.count){
            result = e 
        }
    }) 

    return result
}
