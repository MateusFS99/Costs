const baseUrl = 'http://localhost:5000'

export function get(url) {
  return fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
}

export function post(url, body) {
  return fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}
