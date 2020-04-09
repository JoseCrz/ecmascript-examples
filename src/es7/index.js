// * .includes()
const ages = [33, 25, 22, 64, 72, 13, 18, 5]

if (ages.includes(25)) {
    console.log('Array includes the number')
} else {
    console.log('Array does not includes the number')
}

const lyric = 'Turn off your mind, relax and float down stream'

if (lyric.includes('relax')) {
    console.log('word is included')
} else {
    console.log('word is not included')
}

// * Exponentiation operator
const num = 6
const exponent = 3
const result = 6 ** exponent
console.log(result)