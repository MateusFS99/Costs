const baseUrl = 'http://localhost:5000'

export function get(url, id) {
  return fetch(`${baseUrl}${url}${id ? `/${id}` : ''}`, {
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

export function patch(url, body) {
  return fetch(`${baseUrl}${url}/${body.id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export function remove(url, id) {
  return fetch(`${baseUrl}${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
}
