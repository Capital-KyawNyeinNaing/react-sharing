// export const hadleAction = (type, payload) => {
//   return({
//     type,
//     payload
//   })
// }

export const fetchRquest = (type) => { // request
  return({
    type
  })
}

export const fetchSuccess = (type, payload) => { // success
  return({
    type,
    payload
  })
}

export const fetchError = (type, error) => { // error
  return({
    type,
    error
  })
}