import { defineController } from './$relay'
import { getGoodByTaskId, createGood } from '$/service/good'

export default defineController(() => {
  return {
    get: async ({ query }) => {
      return {
        status: 200,
        body: await getGoodByTaskId(query.taskId)
      }
    },
    post: async ({ body }) => {
      return {
        status: 201,
        body: await createGood(body.taskId)
      }
    },
  }
})
