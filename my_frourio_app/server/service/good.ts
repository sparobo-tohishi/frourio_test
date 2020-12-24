import { PrismaClient } from '@prisma/client'
import { Good, Prisma } from '$prisma/client'

const prisma = new PrismaClient()

export const getGoodByTaskId = async (taskId: Good['taskId']) => {
  return await prisma.good.findFirst({ where: { taskId } })
}

export const createGood = async (taskId: Good['taskId']) => {
  return await prisma.good.create({ data: { taskId } })
}

export const deleteGood = async (id: Good['id']) => {
  await prisma.good.delete({ where: { id } })
}
