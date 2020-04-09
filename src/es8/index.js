// * Object prototype methods
const dobleTapTap = {
    frontend: 'Memo',
    backend: 'José',
    marketing: 'René',
    backendIntern: 'Luis',
    frontendIntern: 'Diego'
}

const roles = Object.keys(dobleTapTap)
console.log(roles)

const members = Object.values(dobleTapTap)
console.log(members)

const list = Object.entries(dobleTapTap)
console.log(list)

// * String padding
const phrase = 'hello'
console.log(phrase.padStart( 7, 'hi'))
console.log(phrase.padEnd( 12, '----'))