import { describe, test, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('server-fetch', async () => {
  await setup({})

  test('normal', async () => {
    const html = await $fetch('/server-fetch')
    expect(html).toContain('<li>server-item1</li>')
  })
})