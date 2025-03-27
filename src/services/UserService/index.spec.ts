import { describe, expect, vi, test, type Mock } from 'vitest'
import { UserService } from '.'

describe('Test UserService', () => {
  describe('.getUser', () => {
    describe('Edge cases', () => {
      test('Should raise an error if network request experiences any issues', async () => {
        // 1. SETUP
        global.fetch = vi.fn(() => Promise.reject(new Error('Network error')))

        // 2. ACTION
        const user = UserService.getUser()

        // 3. ASSERT
        await expect(user).rejects.toThrowError(new Error('Network error'))
      })
    })

    describe('Happy cases', () => {
      test('Should return a UserModel with the correct properties', async () => {
        // 1. SETUP
        global.fetch = vi.fn(() => Promise.resolve({
          json: () => Promise.resolve({
            fullname: 'John Doe'
          })
        })) as Mock

        // 2. ACTION
        const user = UserService.getUser()

        // 3. ASSERT
        await expect(user).resolves.toEqual({
          fullname: 'John Doe'
        })
      })
    })
  })
})