import { get, post, patch, remove } from './api'

const baseUrl = '/projects'

export function getAllProjects() {
  return get(baseUrl).then((resp) => resp.json())
}

export function getProjectById(id) {
  return get(baseUrl, id).then((resp) => resp.json())
}

export function createProject(body) {
  return post(baseUrl, body).then((resp) => resp.json())
}

export function alterProject(body) {
  return patch(baseUrl, body).then((resp) => resp.json())
}

export function removeProject(id) {
  return remove(baseUrl, id).then((resp) => resp.json())
}
