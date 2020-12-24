import { Good } from '$/types'

export type Methods = {
  get: {
    query: {
      taskId: number
    }

    resBody: Good | null
  }

  post: {
    reqBody: Pick<Good, 'taskId'>
    resBody: Good
  }
}
