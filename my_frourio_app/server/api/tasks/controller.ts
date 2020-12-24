import { defineController } from './$relay'
import { getTasks, createTask } from '$/service/tasks'

const print = (text: string) => console.log(text)

export default defineController({ getTasks, print }, ({ getTasks, print }) => {
  return {
    get: async ({ query }) => {
      if (query?.message) print(query.message)

      return { status: 200, body: await getTasks(query?.limit) }
    },
    post: async ({ body }) => {
      return {
        status: 201,
        body: await createTask(body.label)
      }
    }
  }
})
