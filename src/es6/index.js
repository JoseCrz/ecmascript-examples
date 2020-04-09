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