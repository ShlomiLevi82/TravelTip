import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'
import { placeService } from './services/place.service.js'
import { storageService } from './services/async-storage.service.js'

window.onload = onInit
window.onAddMarker = onAddMarker
window.onPanTo = onPanTo
window.onGetLocs = onGetLocs
window.onGetUserPos = onGetUserPos
window.renderPlaces = renderPlaces

function onInit() {
  mapService
    .initMap()
    .then(() => {
      console.log('Map is ready')
    })
    .catch(() => console.log('Error: cannot init map'))
  // }
  // placeService.getPlaceById(placeId).then((places) => {
  storageService.query('placeDB', 200).then((places) => {
    console.log('places11', places)
    renderPlaces(places)
  })
}
// )

// renderPlaces(places)
function renderPlaces(places) {
  console.log('rendering', places)

  var strHTMLs = places.map((place) => {
    return `<tr class="places-preview">
                    <td> Place <td>
                    <td> class="name">${place.name}</td>
                    <td> class="lat>${place.lat}</td>
                </tr>`
  })

  console.log('strHTMLs', strHTMLs)
  const elPlaces = document.querySelector('tbody')
  console.log('elPlaces', elPlaces)
  elPlaces.innerHTML = strHTMLs.join('')
}

// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
  console.log('Getting Pos')
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

function onAddMarker() {
  console.log('Adding a marker')
  mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 })
}

function onGetLocs() {
  locService.getLocs().then((locs) => {
    console.log('Locations:', locs)
    document.querySelector('.locs').innerText = JSON.stringify(locs, null, 2)
  })
}

function onGetUserPos() {
  getPosition()
    .then((pos) => {
      console.log('User position is:', pos.coords)
      document.querySelector('.user-pos').innerText = `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`
    })
    .catch((err) => {
      console.log('err!!!', err)
    })
}
function onPanTo() {
  console.log('Panning the Map')
  mapService.panTo(35.6895, 139.6917)
}
