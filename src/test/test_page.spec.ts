import { describe, test, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('page', async () => {
  await setup({})

  test('index', async () => {
    const html = await $fetch('/')
    expect(html).toContain('layout.default')
    expect(html).toContain('page.index')
  })
})