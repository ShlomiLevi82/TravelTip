import { storageService } from './async-storage.service.js'

const KEY = 'placeDB'

export const placeService = {
  createPlace,
  addStorage,
  setPlace,
  getPlaces,
  getPlaceById,
}

let place = {}

function setPlace(placeName, lat, lng) {
  console.log('placeName, lat, lng:', placeName, lat, lng)
  place = {
    placeName: placeName,
    lat: lat,
    lng: lng,
    createdAt: makeDate(),
    updatedAt: makeDate(),
  }
  console.log('place', place)
  addStorage()
  return place
}

function getPlaces() {
  storageService.query('placeDB').then((places) => {
    console.log('places', places)
    return places
  })
}

function getPlaceById(placeId) {
  return new Promise((resolve) => {
    resolve(place)

    storageService.get(KEY, placeId)
    console.log('place', place)
  })
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

// makeDate()
function makeDate() {
  const date = new Date(Date.now())
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const dateString = date.toString().substring(4, 15)
  const timeString = `${hours}:${minutes}`
  const dateTimeString = `${dateString} ${timeString}`
  console.log('dateTimeString', dateTimeString)
  return dateTimeString
}
