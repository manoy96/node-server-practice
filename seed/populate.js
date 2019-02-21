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

// fetch('https://images-api.nasa.gov/search?q=apollo+11&media_type=image')
//    .then(res => res.json())
//    .then(myJson => {
//       const nasaArray = myJson.collection
//       nasaArray.forEach(apollo => {
//          let nurl = apollo.items
//          fetch(nurl)
//             .then(result => result.json())
//             .then(fullApollo => {
//               return newApollo = {
//                 height: fullApollo.height,
//                 weight: fullApollo.weight,
//                 name: fullApollo.name,
//                 url: purl,
//                 sprite: fullApollo.sprites.front_shiny,
//               }
//             })
//             .then(newOne => {
//                console.log(newOne)
//                postData(`http://localhost:5775/pokemon/pokemon`, newOne)
//                   .then(data => console.log(data))
//                   .catch(error => console.error(error))
//             })
//       })
//    })




fetch('https://images-api.nasa.gov/search?q=apollo+11&media_type=image')
   .then(res => res.json())
   .then(myJson => {
      const nArray = myJson.collection
      nArray.forEach(apollo => {
         let nItems = apollo.items.data
         fetch(nItems)
            .then(myItems => myItems.json())
            .then(fullItem => {
               return newItem = {
                  title: fullItem.title,
                  date: fullItem.date_created,
                  description: fullItem.description
               }
            })
            .then(newOne => {
               console.log(newOne)
               postData(`http://localhost:5775/nasa`, newOne)
                  .then(data => console.log(data))
                  .catch(error => console.error(error))
            })
      })
   })













// const fetch = require('node-fetch')

// fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
//   .then(res => res.json())
//   .then(myJson => {
//     const pokeArray = myJson.results
//     pokeArray.forEach(pokemon => {
//       let purl = pokemon.url
//       fetch(purl)
//           .then(result => result.json())
//           .then(fullPokemon => {
//             return newPokemon = {
//               height: fullPokemon.height,
//               weight: fullPokemon.weight,
//               name: fullPokemon.name,
//               url: purl,
//               sprite: fullPokemon.sprites.front_shiny,
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

// const postData = (url = ``, data = {}) => {
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data) 
//   }).then(response => response.json()
//   )
// }