import { defineController } from './$relay'
import { deleteGood } from '$/service/good'

export default defineController(() => {
  return {
    delete: async ({ params }) => {
      await deleteGood(params.goodId)
      return { status: 204 }
    }
  }
})
