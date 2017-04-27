const API_BASE = 'https://jabberdexicon.herokuapp.com/'
const TOKEN = 'vorpal'

const get = (path, params = {}) => {
  const url = [API_BASE, path, '?', qs(params)].join('')
  return window.fetch(url).then(r => r.json())
}

const post = (path, params = {}) => {
  const url = [API_BASE, path, '?', qs()].join('')
  return window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(r => r.json())
}

const qs = (params = {}) => {
  const opt = Object.assign(params, { access_token: TOKEN })
  const esc = encodeURIComponent
  return Object.keys(opt)
    .map(k => [esc(k), esc(opt[k])].join('='))
    .join('&')
}

export { get, post }
