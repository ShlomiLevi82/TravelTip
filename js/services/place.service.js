import { storageService } from './async-storage.service.js'

const KEY = 'placeDB'

export const placeService = {
  createPlace,
  saveToStorage,
  getPlace,
}

const place = {
  name: 'Israel',
  lat: 31,
  lng: 33,
  weather: '19',
  createdAt: Date.now(),
  updatedAt: Date.now(),
}

function getPlace() {
  return new Promise((resolve) => {
    resolve(place)
  })
}

function createPlace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(place)
    }, 2000)
  })
}

function saveToStorage() {
  storageService.post(KEY, place).then((res) => {
    return res
  })
}

function renderPlaces() {}
