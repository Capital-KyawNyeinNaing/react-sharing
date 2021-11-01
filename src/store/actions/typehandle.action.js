// export const hadleAction = (type, payload) => {
//   return({
//     type,
//     payload
//   })
// }

export const fetchRquest = (type) => {
  return({
    type
  })
}

export const fetchSuccess = (type, payload) => {
  return({
    type,
    payload
  })
}

export const fetchError = (type, error) => {
  return({
    type,
    error
  })
}