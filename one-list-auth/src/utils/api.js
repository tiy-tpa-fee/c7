import auth from './auth'

const BASE = 'https://one-list-api.herokuapp.com'

const get = (path, body) => {
  const url = [BASE, path, '?access_token=', auth.profile.global_client_id].join('')
  return window.fetch(url).then(r => r.json())
}

const put = (path, body) => {
  const url = [BASE, path, '?access_token=', auth.profile.global_client_id].join('')
  return window.fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json())
}

const post = (path, body) => {
  const url = [BASE, path, '?access_token=', auth.profile.global_client_id].join('')
  return window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json())
}

const destroy = (path) => {
  const url = [BASE, path, '?access_token=', auth.profile.global_client_id].join('')
  return window.fetch(url, {
    method: 'DELETE'
  })
}

export { get, post, put, destroy }
