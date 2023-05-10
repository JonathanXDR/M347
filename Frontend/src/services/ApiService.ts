import HttpService from '@/services/HttpService'
import type { Task } from '@/types/Task'
import type { Category } from '@/types/Category'

const ApiService = {
  async getTasks(): Promise<Task[]> {
    const { data } = await HttpService.get<Task[]>('/tasks')
    return data
  },

  async getCategories(): Promise<Category[]> {
    const { data } = await HttpService.get<Category[]>('/categories')
    return data
  }
}

export default ApiService
