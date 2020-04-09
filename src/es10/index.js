// * Array.flat()
const array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, [1,2]]]]
const flatenArray = array.flat()
console.log('array:',array)
console.log('flatenArray',flatenArray)
console.log('flatenArray',array.flat(2))
console.log('flatenArray',array.flat(3))

// * Array.flatMap()
const array = [1, 2, 3, 4, 5]
const flatMappedArray = array.flatMap( item => [item, item**2, item**3])
console.log(flatMappedArray)

// * String.trimStart() & String.trimEnd()
const lyrics = '       Call it what you want, I say, call it what you want        '
console.log(lyrics.trimStart())
console.log(lyrics.trimEnd())

// * Optionoal Catch Binging
try {
    //something
} catch {
    // error will be available
    console.log(error)
}

// * Object.fromEntries()
const entries = [['name', 'jose'], ['age', 23], ['game', 'fez']]
const person = Object.fromEntries(entries)
console.log(person)

// * Symbol description
const mySymbol = `Not quite sure what a Symbol is...`
const symbol = Symbol(mySymbol)
console.log(symbol.description)