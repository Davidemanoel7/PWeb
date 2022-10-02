// Criando promises

const myPromise = new Promise((resolve, reject) => {
    const nome = "David"
    if (nome === "David"){
        resolve('Usuário David encontrado')
    }else{
        reject('Não encontrado')
    }
})
myPromise.then((data) =>{
    console.log(data)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const nome = "David"
    if (nome === "David"){
        resolve('Usuário David encontrado')
    }else{
        reject('Não encontrado')
    }
})
myPromise2
    .then((data) =>{
        return data.toLowerCase()
    })
    .then((stringModific)=>{
        console.log(stringModific)
    })
// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
    const nome = "Davi"
    if (nome === "David"){
        resolve('Usuário David encontrado')
    }else{
        reject('Não encontrado')
    }
})

myPromise3
    .then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log('Aconteceu um erro: ' +err)
    })
// Varias promessas com all

const p1 = new Promise((resolve, reject) =>{
    resolve("P1, Ok!")
})

const p2 = new Promise((resolve, reject) =>{
    resolve("P2, Ok!")
})

const p3 = new Promise((resolve, reject) =>{
    resolve("P3, Ok!")
})

const resolveAll = Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data)
})

console.log('Depois do metodo .all()')

// Várias promessas com race

const p4 = new Promise((resolve, reject) =>{
    resolve("P4, Ok!")
})

const p5 = new Promise((resolve, reject) =>{
    resolve("P5, Ok!")
})

const p6 = new Promise((resolve, reject) =>{
    resolve("P6, Ok!")
})

const resolveAllRace = Promise.race([p1,p2,p3]).then((data)=>{
    console.log(data)
})

// Fetch request na API do GuitHub
// Fetch API

const userName = 'Davidemanoel7'

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',    
    },
}).then((response) =>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(`O nome desse usuário é: ${data.name}`)
}).catch((err) =>{
    console.log(`Houve algum erro: ${err}`)
})