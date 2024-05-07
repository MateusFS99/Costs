import { post } from './api'

const baseUrl = '/projects'

export function createProject(body) {
  return post(baseUrl, body).then((resp) => resp.json())
}
