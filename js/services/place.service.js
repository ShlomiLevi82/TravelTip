import { storageService } from './async-storage.service.js'
import { util } from './util.service.js'

export const places = {
  createPlace,
  saveToStorage,
  getPlaceData,
}

const place = {
  id: util.makeId(),
  name: 'Israel',
  lat: 31,
  lng: 33,
  weather: '19',
  createdAt: Date.now(),
  updatedAt: Date.now(),
}

let newPlace = {}

function createPlace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(place)
    }, 1000)
  })
}

function saveToStorage() {
  //   storageService.post(place, newPlace)
  //   const x =
  console.log(storageService.post(place, newPlace))
}

getPlaceData()
function getPlaceData() {
  const prmPlace = axios
    // .get(wikiUrl)
    .then((res) => res.data)
    .then((data) => {
      const data = data.query.search.map((item) => item.snippet)
      console.log('data:', data)
      return data
    })
    .catch((error) => {
      console.error('Error:', error)
    })

  return prmPlace
}
