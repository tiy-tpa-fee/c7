const TOKEN = 'vorpal'
const API_BASE = 'https://jabberdexicon.herokuapp.com'

const get = (path, query) => {
  let url = API_BASE + path + '?access_token=' + TOKEN
  if (query) {
    url += '&q=' + query
  }
  return window.fetch(url).then((response) => {
    return response.json()
  })
}

const post = (path, body) => {
  const url = API_BASE + path + '?access_token=' + TOKEN
  return window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => {
    return response.json()
  })
}

export { get, post }
