import { get } from './api'

const baseUrl = '/categories'

export function getAllCategories() {
  return get(baseUrl).then((resp) => resp.json())
}
