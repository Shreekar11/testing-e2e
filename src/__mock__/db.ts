import { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

beforeEach(() => {
  mockReset(client)
})

export const client = mockDeep<PrismaClient>()