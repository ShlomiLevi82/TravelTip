import { storageService } from './async-storage.service.js'

const KEY = 'placeDB'

export const placeService = {
  createPlace,
  saveToStorage,
}

const place = {
  name: 'Israel',
  lat: 31,
  lng: 33,
  weather: '19',
  createdAt: Date.now(),
  updatedAt: Date.now(),
}

function createPlace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(place)
    }, 2000)
  })
}

function saveToStorage() {
  const x = storageService
    .post(KEY, place)
    .then((res) => console.log('res', res))

  console.log('x', x)
}

function renderPlaces() {}
