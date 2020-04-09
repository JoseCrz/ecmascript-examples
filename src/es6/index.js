// * Default Params
function coolFunction (name = 'José', lastname = 'Cuevas', age = 23, country = 'MX') {
    console.log(name, lastname, age, country)
}

coolFunction()
coolFunction('Phill', 'Fish', 36, 'CA')

// * Template Literals
const petName = 'Mimi'
const petAge = 5
const petType = 'cat'
const phrase = `Hello my ${petType}'s name is ${petName}, it is ${petAge} years old`
console.log(phrase)

// * Multiline strings
const song = `Eleanor Rigby, picks up the rice in a church where a wedding has been,
lives in a dream.
`
console.log(song)

// * Object Destructuring
const beatle = {
    name: 'Paul',
    lastname: 'McCartney',
    instrument: 'Bass',
    age: 73
}

function greet({name, lastname}) {
    console.log(`ladies and gentleman, ${name} ${lastname}`)
}  

greet(beatle)

// * Spread Operator
const nintendoGames = ['The Legend of Zelda', 'Metroid Prime', 'Super Smash Bros']
const playstationGames = ['Bloodborne', 'Uncharted', 'The Last of Us']

const greatGames = ['Cuphead', ...nintendoGames, ...playstationGames]

console.log(greatGames)

// * Object Assignation
const title = 'The Dark Knight Rises'
const director = 'Christopher Nolan'
const score = 100

const movie = {
    title,
    director,
    score
}

console.log(movie)

// * Arrow Functions
const myFunction = (value1, value2, value3) => {
    console.log(value1, value1, value3)
}

const people = [
    {
        name: 'Jose',
        age: 24
    },
    {
        name: 'Eduardo',
        age: 22
    },
    {
        name: 'Memo',
        age: 34
    }
]

const names = people.map(person => person.name)
console.log(names)

const square = num => num ** 2

// * Promises
const callDB = connection => {
    return new Promise((resolve, reject) => {
        if (connection) {
            resolve('HERE IS SOME DATA')
        } else {
            reject('NO CONNECTION')
        }
    })
}

callDB('connection')
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})

callDB()
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})