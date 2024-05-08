import { get, post } from './api'

const baseUrl = '/projects'

export function getAllProjects() {
  return get(baseUrl).then((resp) => resp.json())
}

export function createProject(body) {
  return post(baseUrl, body).then((resp) => resp.json())
}
