import { storageService } from './async-storage.service.js'

const KEY = 'placeDB'

export const placeService = {
  createPlace,
  addStorage,
  setPlace,
}

let place = {}

function setPlace(placeName, lat, lng) {
  console.log('placeName, lat, lng:', placeName, lat, lng)
  place = {
    placeName: placeName,
    lat: lat,
    lng: lng,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
  console.log('place', place)
  addStorage()
  return place
}

function createPlace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(setPlace)
    }, 2000)
  })
}

function addStorage() {
  storageService.post(KEY, place).then((res) => {
    console.log('res', res)
    return res
  })
}
