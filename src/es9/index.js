// * Rest Operator
const palkia = {
    type: 'dragon',
    type2: 'water',
    status: 'legendary',
}

const pokemonStatus = ({status, ...all}) => {
    console.log(status)
    console.log(all)
}

pokemonStatus(palkia)

// * Spread operator
const oldTeam = {
    frontend: 'Memo',
    backend: 'José',
    marketing: 'René',
}

const newTeam = {
    backendIntern: 'Luis',
    frontendIntern: 'Diego'
}

const fullTeam = {
    ...oldTeam,
    ...newTeam
}

console.log(fullTeam)

// * promise.finally()
const summonPokemon = success => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('Pikachu, I choose you!')
            }

            reject('No more Pokemon')
        }, 3000)
    })
}

summonPokemon(true)
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finished!'))

// * RegEx Grouping
const dateRegEx = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = dateRegEx.exec('2020-04-08')
console.log(match)

match.forEach(item => console.log(item))

const year = match[1]
const month = match[2]
const day = match[3]
console.log('year', year)
console.log('month', month)
console.log('day', day)