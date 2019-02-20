// const fetch = require('node-fetch')

// fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
//     .then(res => res.json())
//     .then(myJson => {
//         const pokeArray = myJson.results
//         pokeArray.forEach(pokemon => {
//             postData(`http://localhost:5775/pokemon/pokemon`, pokemon)
//                 .then(data => console.log(data))
//                 .catch(error => console.error(error))
//         })
//     })

// const postData = (url = ``, data = {}) => {
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(response => response.text())
// }










// const fetch = require('node-fetch')

// fetch('https://api.nasa.gov/planetary/apod?api_key=diU3YOSoUyfoY6PSV2zqJn9bEZ1geyaJ7J61cDy1&start_date=2019-01-20&end_date=2019-02-14')
//   .then(res => res.json())
//   .then(myJson => {
//     const nasaArray = myJson.copyright
//     nasaArray.forEach(apod => {
//       let nurl = apod.url
//       fetch(nurl)
//           .then(result => result.json())
//           .then(fullApod => {
//             return newPokemon = {
//               height: fullApod.height,
//               weight: fullApod.weight,
//               name: fullApod.name,
//               url: purl,
//               sprite: fullApod.sprites.front_shiny,
//             }
//           })
//       .then(newOne => {
//         console.log(newOne)
//         postData(`http://localhost:5775/pokemon/pokemon`, newOne)
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
//     })
//   })
// })




const fetch = require('node-fetch')

fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
  .then(res => res.json())
  .then(myJson => {
    const pokeArray = myJson.results
    pokeArray.forEach(pokemon => {
      let purl = pokemon.url
      fetch(purl)
          .then(result => result.json())
          .then(fullPokemon => {
            return newPokemon = {
              height: fullPokemon.height,
              weight: fullPokemon.weight,
              name: fullPokemon.name,
              url: purl,
              sprite: fullPokemon.sprites.front_shiny,
            }
          })
      .then(newOne => {
        console.log(newOne)
        postData(`http://localhost:5775/pokemon/pokemon`, newOne)
        .then(data => console.log(data))
        .catch(error => console.error(error))
    })
  })
})

const postData = (url = ``, data = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  }).then(response => response.json()
  )
}